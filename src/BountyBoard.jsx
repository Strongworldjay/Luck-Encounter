import React, { useEffect, useState } from "react";
import "./BountyBoard.css";

const board = "/assets/bountyboard.png";
const bountyPaths = [
  "/assets/bounty1.png",
  "/assets/bounty2.png",
  "/assets/bounty3.png",
  "/assets/bounty4.png",
  "/assets/bounty5.png",
  "/assets/bounty6.png",
];

const bountyData = [
  {
    title: "Bounty: Sea Siren (Failed)",
    reward: "450 gp, dead (present larynx as proof)",
    blurb:
      "Will send scouts to revise new CI after it achieved Victory against adventuring party.",
    details:
      "Succesfully evaded an Adventuring party where 1 member perished, most likely gained enough EXP to evolve and will be monitored and upgraded Carnage Index.",
    location:
      "Rocky coastal waters and fog-heavy hunting routes near local shipping lanes.",
    physicalDescription:
      "Humanoid aquatic predator with alluring voice, pale sea-worn skin, sharp claws, and an adapted throat capable of deadly song.",
    proofOfDeath:
      "Return the larynx as proof of death. Guild inspectors may also verify notable body markings if needed.",
    jobPoster:
      "Posted by the Adventurer's Guild on behalf of local harbor interests and surviving witnesses.",
  },
  {
    title: "Bounty: Coral Drake (Completed)",
    reward: "500 GP has been paid",
    blurb: "Successfully slain by Sword & Shield.",
    details: "Has been slain and confirmed.",
    location:
      "Previously located near reef shelves and jagged coastal rock formations.",
    physicalDescription:
      "Draconic reptile with coral-like plating, salt-hardened scales, and a low sweeping body built for shoreline ambush.",
    proofOfDeath:
      "Bounty already completed and paid. Remains were previously confirmed by guild personnel.",
    jobPoster:
      "Originally posted by the Adventurer's Guild at the request of coastal merchants.",
  },
  {
    title: "Bounty: Silver-Fox Bandit",
    reward: "220 pp",
    blurb:
      "A night stalker who has killed nad robbed many higher financial individuals within the city, estimated 4 C.I.",
    details:
      "Not much is known, uses special daggers and lurks in the fogs.",
    location:
      "Most often sighted in fog-heavy city streets, alleyways, and wealthier night districts.",
    physicalDescription:
      "Lean humanoid killer known for a fox-like silver mask, dark layered gear, quick footwork, and specialized daggers.",
    proofOfDeath:
      "Return the body or masked headpiece and both signature daggers for guild confirmation.",
    jobPoster:
      "Posted by the Adventurer's Guild under contract from wealthy city patrons and affected families.",
  },
  {
    title: "Bounty: Lake Troll",
    reward: "625 gp (heart required)",
    blurb:
      "Amphibious troll lurking beneath the waters by the West Gloam lighthouse; fog-night ambusher; brutally fast swimmer.",
    details:
      "This troll surfaces after dusk when the lighthouse foghorn rolls, using the mist to close distance before yanking victims off piers and skiffs. It fights with sweeping claws, heft slam and trows, and drowning holds, then slips under to regroup—merciless and habitual. Expect lair tunnels in the pilings and stonework around the light’s shoals. Fire or acid halts its regeneration; without these, wounds knit as you watch. Recommended tactics: shoreline kill-box with lanterns to cut the fog, tethered harpoons and weighted nets to keep it from diving, and grapnels to snag if it flees. Aim to cripple the legs, then pin with chain or pikes. Do not pursue into open water. Extract and preserve the heart immediately for proof and to prevent resurgence; present the heart for payment.",
    location:
      "West Gloam lighthouse shoals, surrounding piers, skiffs, and submerged stonework.",
    physicalDescription:
      "Large amphibious troll with slick moss-dark hide, elongated limbs, regenerative flesh, and powerful claws suited for dragging prey underwater.",
    proofOfDeath:
      "Extract and preserve the heart immediately after the kill and deliver it to the guild for payment.",
    jobPoster:
      "Posted by the Adventurer's Guild on behalf of West Gloam lighthouse wardens and nearby fishermen.",
  },
  {
    title: "Bounty: Tidal Elemental",
    reward: "575 gp",
    blurb:
      "Runaway water-spirit in a separate sewer offshoot; roaring torrent form; warps canal currents. No proof required—flow will normalize upon defeat.",
    details:
      "An overcharged water elemental has densified into a tidal core deep within an unconnected sewer branch. Its surges backwash through valves and sluices, bucking boats and jamming gates across the canal grid. In the tunnels it manifests as a pressurized wall of churning water studded with grit and scrap, battering intruders with destructive blows and extinguishing lamps. Tactics: Avoid lightning magic (it conducts shock through the flood) and open flame (snuffed instantly). Cold, binding sigils, and earthen barriers work best. When dispersed, the canals will settle back to regular flow—Harbor Wardens will confirm by gauge readings; no trophy needed.",
    location:
      "Deep within an isolated sewer offshoot connected indirectly to the canal network.",
    physicalDescription:
      "A dense roaring mass of pressurized water with a shifting core, often carrying grit, refuse, and scraps inside its body.",
    proofOfDeath:
      "No trophy required. Harbor Wardens will confirm completion through stabilized canal flow and corrected gauge readings.",
    jobPoster:
      "Posted by the Adventurer's Guild on behalf of Harbor Wardens and canal maintenance officials.",
  },
  {
    title: "Bounty: Kobold Krew",
    reward: "820 gp",
    blurb:
      "Group of Kobolds who have raided and taken up residence in a Tavern/Inn outskirts.",
    details:
      "A group of inventor Kobolds have taken up residence wqithin a semi-popular Inn and has setup many traps and are chaotic but simpletons in wisdom.",
    location:
      "A semi-popular tavern and inn on the outskirts, including its basement, roof spaces, and trap-lined approach routes.",
    physicalDescription:
      "Multiple small kobolds, likely wiry and quick, equipped with improvised gear, scavenged tools, trap parts, and unstable inventions.",
    proofOfDeath:
      "Clear the inn, eliminate or capture the kobolds, and return trap schematics, leader insignia, or marked tools for verification.",
    jobPoster:
      "Posted by the Adventurer's Guild at the request of the innkeeper and nearby locals.",
  },
];

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function BountyBoard() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const isMobile = useIsMobile(640);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (isMobile) {
        if (e.key === "ArrowRight") {
          setMobileIndex((prev) => (prev + 1) % bountyPaths.length);
        }
        if (e.key === "ArrowLeft") {
          setMobileIndex((prev) => (prev - 1 + bountyPaths.length) % bountyPaths.length);
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobile]);

  const isOpen = openIndex !== null;
  const activeBounty = isOpen ? bountyData[openIndex] : null;
  const mobileBounty = bountyData[mobileIndex];

  const goPrev = () =>
    setMobileIndex((prev) => (prev - 1 + bountyPaths.length) % bountyPaths.length);

  const goNext = () =>
    setMobileIndex((prev) => (prev + 1) % bountyPaths.length);

  if (isMobile) {
    return (
      <div className="bountyboard-mobile">
        <div className="bounty-mobile-card">
          <div className="bounty-mobile-image-wrap">
            <img
              src={bountyPaths[mobileIndex]}
              alt={mobileBounty.title}
              className="bounty-mobile-image"
              draggable={false}
            />
          </div>

          <div className="bounty-mobile-content">
            <h2 className="bounty-mobile-title">{mobileBounty.title}</h2>

            <div className="bounty-mobile-meta">
              <span className="pill">{mobileBounty.reward}</span>
            </div>

            <p className="bounty-mobile-blurb">{mobileBounty.blurb}</p>
            <p className="bounty-mobile-details">{mobileBounty.details}</p>

            <div className="bounty-mobile-facts">
              <div className="fact-row">
                <div className="fact-label">Location</div>
                <div className="fact-value">{mobileBounty.location}</div>
              </div>

              <div className="fact-row">
                <div className="fact-label">Physical Description</div>
                <div className="fact-value">{mobileBounty.physicalDescription}</div>
              </div>

              <div className="fact-row">
                <div className="fact-label">Proof of Death</div>
                <div className="fact-value">{mobileBounty.proofOfDeath}</div>
              </div>

              <div className="fact-row">
                <div className="fact-label">Job Poster</div>
                <div className="fact-value">{mobileBounty.jobPoster}</div>
              </div>
            </div>
          </div>

          <div className="bounty-mobile-nav">
            <button className="bounty-nav-btn" onClick={goPrev} aria-label="Previous bounty">
              ←
            </button>

            <div className="bounty-mobile-counter">
              {mobileIndex + 1} / {bountyPaths.length}
            </div>

            <button className="bounty-nav-btn" onClick={goNext} aria-label="Next bounty">
              →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bountyboard-root ${isOpen ? "is-open modal-lock" : ""}`}>
      <div className="bountyboard-board">
        <img
          src={board}
          alt="Bounty board"
          className="board-img"
          draggable={false}
        />

        <div className="bountyboard-safe">
          <div className="bountyboard-grid">
            {bountyPaths.map((src, i) => (
              <button
                key={i}
                className={`bounty-cell cell-${i + 1}`}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open bounty ${i + 1}`}
                title="Open bounty"
              >
                <img src={src} alt={`Bounty ${i + 1}`} draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && activeBounty && (
        <div
          className="bountyboard-modal-backdrop"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bountyboard-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-left">
              <img
                src={bountyPaths[openIndex]}
                alt={activeBounty.title}
                className="modal-image"
                draggable={false}
              />
            </div>

            <div className="modal-right">
              <div className="modal-header">
                <h2>{activeBounty.title}</h2>
                <button
                  className="modal-close"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="modal-meta">
                <span className="pill">{activeBounty.reward}</span>
              </div>

              <p className="modal-blurb">{activeBounty.blurb}</p>

              <div className="modal-details">
                <p className="modal-description">{activeBounty.details}</p>

                <div className="bounty-facts">
                  <div className="fact-row">
                    <div className="fact-label">Location</div>
                    <div className="fact-value">{activeBounty.location}</div>
                  </div>

                  <div className="fact-row">
                    <div className="fact-label">Physical Description</div>
                    <div className="fact-value">
                      {activeBounty.physicalDescription}
                    </div>
                  </div>

                  <div className="fact-row">
                    <div className="fact-label">Proof of Death</div>
                    <div className="fact-value">{activeBounty.proofOfDeath}</div>
                  </div>

                  <div className="fact-row">
                    <div className="fact-label">Job Poster</div>
                    <div className="fact-value">{activeBounty.jobPoster}</div>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => setOpenIndex(null)}
                >
                  Acknowledge
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => setOpenIndex(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}