export function getTheme(darkMode) {
  return darkMode
    ? {
        page: "bg-[#050505] text-white",
        heroBg: "bg-[#050505]",
        portfolioBg: "bg-[#0b0b0b]",
        servicesBg:
          "bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.10),transparent_32%)]",
        sectionBg: "bg-[#080808]",
        faqBg: "bg-[linear-gradient(180deg,#060606,#0d0d0d)]",
        ctaBg:
          "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_34%),#050505]",
        overlay: "bg-[#050505]/95",
        panel: "border-white/10 bg-white/[0.04]",
        softPanel: "border-white/10 bg-white/[0.03]",
        buttonGhost:
          "border-white/20 text-white hover:border-white/40 hover:bg-white/5",
        buttonPrimary: "bg-[#22c55e] text-[#04110a] hover:scale-[1.02]",
        topButton:
          "border-white/15 bg-white/[0.04] text-white hover:border-white/35 hover:bg-white/[0.08]",
        textPrimary: "text-white",
        textSecondary: "text-white/92",
        textMuted: "text-white/68",
        textSoft: "text-white/55",
        textFaint: "text-white/45",
        menuLink: "text-white/78 hover:text-[#22c55e]",
        heroOverlay:
          "bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.78)_38%,rgba(5,5,5,0.42)_100%)]",
        heroCard: "border-white/10 bg-white/[0.06]",
        heroDotInactive: "bg-white/20",
        heroArrow:
          "border-white/15 bg-white/[0.05] text-white hover:border-white/35 hover:bg-white/[0.10]",
      }
    : {
        page: "bg-[#f4fbf6] text-[#08110c]",
        heroBg: "bg-[#eef9f1]",
        portfolioBg: "bg-[#eef9f1]",
        servicesBg:
          "bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.14),transparent_32%),linear-gradient(180deg,#f4fbf6,#ecf8f0)]",
        sectionBg: "bg-[#eef8f1]",
        faqBg: "bg-[linear-gradient(180deg,#effaf2,#e6f6ea)]",
        ctaBg:
          "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_34%),linear-gradient(180deg,#f3fbf5,#e9f7ed)]",
        overlay: "bg-[#f4fbf6]/95",
        panel: "border-[#b8e7c8] bg-white/80",
        softPanel: "border-[#cdeed8] bg-white/70",
        buttonGhost:
          "border-[#9cddb4] text-[#0d1a12] hover:border-[#16a34a] hover:bg-[#dcfce7]",
        buttonPrimary: "bg-[#16a34a] text-white hover:scale-[1.02]",
        topButton:
          "border-[#b7e7c8] bg-white/80 text-[#0d1a12] hover:border-[#16a34a] hover:bg-[#dcfce7]",
        textPrimary: "text-[#08110c]",
        textSecondary: "text-[#101a13]",
        textMuted: "text-[#163326]",
        textSoft: "text-[#18382a]",
        textFaint: "text-[#1d3f30]",
        menuLink: "text-[#102018] hover:text-[#16a34a]",
        heroOverlay:
          "bg-[linear-gradient(90deg,rgba(244,251,246,0.72)_0%,rgba(244,251,246,0.46)_42%,rgba(244,251,246,0.18)_100%)]",
        heroCard: "border-[#9fdbb5] bg-white/88",
        heroDotInactive: "bg-[#b7e7c8]",
        heroArrow:
          "border-[#9fdbb5] bg-white/88 text-[#0b160f] hover:border-[#16a34a] hover:bg-[#dcfce7]",
      };
}