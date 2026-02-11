import React, { useState } from "react";
import Section from "../common/Section";
import { profile } from "../../data/profile";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ここでフォーム送信処理を実装
        const mailtoLink = `mailto:${profile.email}?subject=お問い合わせ from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0A----%0D%0A${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <Section id="contact" title="CONTACT" className="bg-cream-100">
            <div className="max-w-2xl mx-auto">
                <p className="text-center text-brown-700 mb-12 text-lg">
                    お仕事のご依頼、ご質問などお気軽にお問い合わせください。
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-cream-50 border border-sand-200 rounded-lg shadow-lg p-8"
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-brown-800 font-semibold mb-2"
                        >
                            お名前 <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-sand-300 rounded-lg bg-cream-50 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:border-transparent"
                            placeholder="山田 太郎"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-brown-800 font-semibold mb-2"
                        >
                            メールアドレス{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-sand-300 rounded-lg bg-cream-50 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:border-transparent"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-brown-800 font-semibold mb-2"
                        >
                            メッセージ <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 border border-sand-300 rounded-lg bg-cream-50 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:border-transparent resize-none"
                            placeholder="お問い合わせ内容をご記入ください"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-4 bg-brown-800 text-cream-50 font-semibold rounded-full hover:bg-brown-900 transition-colors shadow-lg"
                    >
                        送信する
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-brown-600 mb-4">
                        または、直接メールでご連絡ください
                    </p>
                    <a
                        href={`mailto:${profile.email}`}
                        className="text-brown-800 hover:text-brown-900 font-semibold text-lg"
                    >
                        {profile.email}
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
