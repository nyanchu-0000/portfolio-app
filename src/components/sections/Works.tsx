import React, { useState } from "react";
import Section from "../common/Section";
import WorkCard from "../common/WorkCard";
import { engineeringWorks, designWorks, artWorks } from "../../data/works";

type WorkCategory = "engineering" | "design" | "art";

const Works: React.FC = () => {
    const [activeTab, setActiveTab] = useState<WorkCategory>("engineering");

    const tabs = [
        {
            id: "engineering" as WorkCategory,
            label: "Engineering",
            works: engineeringWorks,
        },
        { id: "design" as WorkCategory, label: "Design", works: designWorks },
        { id: "art" as WorkCategory, label: "Art", works: artWorks },
    ];

    const currentWorks = tabs.find((tab) => tab.id === activeTab)?.works || [];

    return (
        <Section id="works" title="WORKS" className="bg-cream-100">
            <div className="text-center mb-12">
                <p className="text-brown-700 text-lg">制作実績</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12 gap-4 flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${
                            activeTab === tab.id
                                ? "bg-brown-800 text-cream-50 shadow-lg"
                                : "bg-cream-50 text-brown-700 hover:bg-sand-100 border border-sand-300"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Works Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentWorks.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>

            {currentWorks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-brown-500 text-lg">
                        作品はまだありません
                    </p>
                </div>
            )}
        </Section>
    );
};

export default Works;
