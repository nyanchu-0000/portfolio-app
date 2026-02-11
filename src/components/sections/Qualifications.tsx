import React from "react";
import Section from "../common/Section";
import { qualifications } from "../../data/qualifications";

const Qualifications: React.FC = () => {
    return (
        <Section id="qualifications" title="QUALIFICATIONS" className="bg-cream-100">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {qualifications.map((qual) => (
                        <div
                            key={qual.id}
                            className="bg-cream-50 border border-sand-200 rounded-lg p-6 hover:shadow-lg transition-all border-l-4 border-l-brown-700"
                        >
                            <h3 className="text-lg font-bold mb-2 text-brown-900">
                                {qual.name}
                            </h3>
                            <p className="text-brown-600 mb-2 text-sm">{qual.issuer}</p>
                            <p className="text-sm text-brown-500">{qual.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Qualifications;
