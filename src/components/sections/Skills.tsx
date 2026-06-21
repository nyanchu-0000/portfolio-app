import React, { useState } from "react";
import Section from "../common/Section";
import SkillCard from "../common/SkillCard";
import SkillLevelModal from "../common/SkillLevelModal";
import { skills, skillCategories } from "../../data/skills";

const Skills: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section id="skills" className="bg-cream-50/80">
            {/* カスタムタイトル行（「？」ボタン付き） */}
            <div className="text-center mb-16 relative">
                <div className="inline-flex items-center gap-3">
                    <h2 className="text-3xl md:text-5xl font-bold text-brown-900 tracking-tight">
                        SKILLS
                    </h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-7 h-7 rounded-full border-2 border-brown-400 text-brown-500 text-sm font-bold flex items-center justify-center hover:bg-brown-100 hover:border-brown-600 hover:text-brown-700 transition-all flex-shrink-0 mt-1 md:mt-2"
                        aria-label="スキルレベルの定義を見る"
                        title="スキルレベルの定義"
                    >
                        ?
                    </button>
                </div>
                <div className="w-16 h-1 bg-brown-800 mx-auto mt-4"></div>
            </div>

            <SkillLevelModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

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
