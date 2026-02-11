import React from "react";
import Section from "../common/Section";
import SkillCard from "../common/SkillCard";
import { skills, skillCategories } from "../../data/skills";

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="SKILLS" className="bg-cream-50">
            <div className="space-y-12">
                {skillCategories.map((category) => {
                    const categorySkills = skills.filter(
                        (skill) => skill.category === category,
                    );

                    if (categorySkills.length === 0) return null;

                    return (
                        <div key={category}>
                            <h3 className="text-xl font-bold mb-6 text-brown-900 text-center md:text-left">
                                {category}
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categorySkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
