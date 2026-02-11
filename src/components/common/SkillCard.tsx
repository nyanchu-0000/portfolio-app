import React from "react";
import type { Skill } from "../../types/index";

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-cream-50 border border-sand-200 rounded-lg hover:shadow-md transition-all hover:border-brown-300">
            {skill.icon && <div className="text-3xl">{skill.icon}</div>}
            <div className="flex-1">
                <h4 className="font-semibold text-base text-brown-900">{skill.name}</h4>
                <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-8 h-2 rounded-full ${
                                index < skill.level
                                    ? "bg-brown-700"
                                    : "bg-sand-200"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
