"""Intake-time quotation check for the publication distillates of this instance.

The validation contract cannot check a publication quotation, because the source
text is not in the vault; the schema therefore records the check performed at
intake as `checked.quote`. This script is the mechanism behind that record: it
fetches each cited page and asserts that every quotation used in
`10_distillates/publications/` occurs in it verbatim, after HTML tag stripping,
entity unescaping and whitespace and quote-glyph normalization.

Usage:
    python tools/quote-check.py

Exit code 0 when every quotation was found. Network access is required; a page
that no longer serves the cited text is a finding, not a script failure.
"""

from __future__ import annotations

import html
import re
import subprocess
import sys
import urllib.request

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml",
    "Accept-Language": "en-US,en;q=0.9",
}

# Glyph pairs folded before matching, so a quotation cut from a page that uses
# typographic punctuation still compares equal to the plain-ASCII form.
NORMALIZE = (
    ("’", "'"),  # noqa: RUF001
    ("‘", "'"),  # noqa: RUF001
    ("“", '"'),
    ("”", '"'),
    ("–", "-"),  # noqa: RUF001
    ("—", "-"),
    (" ", " "),  # noqa: RUF001
)

QUOTES: dict[str, tuple[str, list[str]]] = {
    "bourque2021cannabis": (
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC8222623/",
        [
            "A recent meta-analysis including more than 52 studies and 1,580 healthy individuals shows that verbal learning and memory (e.g., encoding, consolidation, retrieval), and working memory are the cognitive domain most impaired by acute cannabis-induced intoxication",
            "moderate cognitive deficits (effect sizes: g = 0.69; g = 0.51; g = 0.51, respectively)",
            "Administration of cannabis also seems to elicit mild to moderate adverse effects on processing speed (g = 0.38) and executive functioning (g = 0.37)",
        ],
    ),
    "crean2011executive": (
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC3037578/",
        [
            "The psychoactive effects of cannabis are experienced immediately after smoking, with peak levels of intoxication occurring after approximately 30 minutes and lasting several hours",
            "Acute cannabis use has generally been found to impair aspects of planning and decision-making, e.g. in terms of response speed, accuracy and latency.",
            "researchers have shown that cannabis consumption impairs working memory, or the ability to hold and manipulate information and remember it following a short delay",
            "studies in which assessment took place between immediately upon smoking cannabis and up to six hours since last use",
        ],
    ),
    "wikipedia-tangential-speech": (
        "https://en.wikipedia.org/wiki/Tangential_speech",
        [
            "a communication disorder in which the train of thought of the speaker wanders and shows a lack of focus, never returning to the initial topic of the conversation",
            "in which the speaker wanders but eventually returns to the topic",
        ],
    ),
    "veriheal2026speech": (
        "https://www.veriheal.com/blog/does-cannabis-affect-our-speech-a-new-study-weighs-in/",
        [
            "Altered speech rate: Involves speaking either noticeably faster or slower than usual, with timing disruptions affecting natural conversation flow.",
            "Reduced verbal fluency: In complex social situations, making it harder to find the right words during detailed explanations.",
        ],
    ),
    "medium2021stonedspeech": (
        "https://jamiemarrara.medium.com/why-do-stoners-talk-like-that-the-phenomenon-of-stoned-speech-7137ed2c6982",
        [
            "fragmented, thought patterns are disjointed, and the speaker quite often forgets what is being thought or what was recently said",
            '"Stoned speech" can also involve unnatural pauses, slowed speech, and "spaced out" mannerisms.',
        ],
    ),
}


def plain(raw: str) -> str:
    raw = re.sub(r"(?s)<(script|style).*?</\1>", " ", raw)
    raw = re.sub(r"<[^>]+>", " ", raw)
    raw = html.unescape(raw)
    for curly, straight in NORMALIZE:
        raw = raw.replace(curly, straight)
    return re.sub(r"\s+", " ", raw)


def _curl(url: str) -> str | None:
    command = ["curl", "-sL", "--max-time", "60", "-A", HEADERS["User-Agent"], url]
    try:
        result = subprocess.run(command, capture_output=True, timeout=90, check=False)
    except (OSError, subprocess.TimeoutExpired):
        return None
    return result.stdout.decode("utf-8", errors="replace") if result.returncode == 0 else None


def main() -> None:
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
    missing = 0
    for ref, (url, quotes) in QUOTES.items():
        request = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                text = plain(response.read().decode("utf-8", errors="replace"))
        except OSError as exc:
            fetched = _curl(url)  # some hosts reject urllib but serve curl
            if fetched is None:
                missing += len(quotes)
                print(f"UNREACHABLE {ref}: {exc}")
                continue
            text = plain(fetched)
        for quote in quotes:
            found = re.sub(r"\s+", " ", quote) in text
            missing += not found
            print(f"{'FOUND ' if found else 'ABSENT'} {ref}: {quote[:70]}")
    print(f"{missing} quotation(s) not found in the cited source")
    sys.exit(1 if missing else 0)


if __name__ == "__main__":
    main()
