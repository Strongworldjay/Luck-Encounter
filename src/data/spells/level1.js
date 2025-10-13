import { spellImgUrl, slugify } from "../../features/spells/utils";

export const LEVEL1 = [
  {
    slug: slugify("Cure Wounds"),
    name: "Cure Wounds",
    classes: ["Bard", "Cleric", "Druid", "Ranger", "Paladin"],
    spellLevel: 1,
    school: "Evocation",
    castingTime: "1 action",
    tags: ["Healing"],
    saveRequired: "None",
    attackType: "None",
    damageTypes: [],
    conditions: [],
    components: { verbal: true, somatic: true, material: false },
    concentration: false,
    ritual: false,
    descriptionMd:
      "[spells]Cure Wounds[/spells]\n" +
      "A creature you touch regains 1d8 + your spellcasting ability modifier hit points. " +
      "This spell has no effect on undead or constructs.",
    imagePath: spellImgUrl("curewounds")
  }
  // add more 1st-level spells…
];
