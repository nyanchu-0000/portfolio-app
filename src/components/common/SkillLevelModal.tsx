import React, { useEffect } from "react";

interface SkillLevelModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const skillLevels = [
    {
        level: 1,
        label: "入門",
        description: "基礎を学習中。チュートリアルや入門書を通じて概念を理解し始めた段階。",
        bars: 1,
    },
    {
        level: 2,
        label: "基礎",
        description: "調べながらであれば、簡単な機能を作成できる段階。",
        bars: 2,
    },
    {
        level: 3,
        label: "中級",
        description: "調査しながら独力で実装・問題解決ができる。実務での使用経験がありテストやレビュー経験あり。",
        bars: 3,
    },
    {
        level: 4,
        label: "上級",
        description: "使用経験が豊富で、積極的に活用できる。",
        bars: 4,
    },
    {
        level: 5,
        label: "エキスパート",
        description: "使用経験が豊富で深い専門知識を持ち、他者に教えられる。",
        bars: 5,
    },
];

const SkillLevelModal: React.FC<SkillLevelModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-brown-900/60 backdrop-blur-sm" />

            {/* モーダル本体 */}
            <div
                className="relative bg-cream-50 rounded-2xl shadow-2xl w-full max-w-md border border-sand-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ヘッダー */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-sand-200">
                    <h3 className="text-lg font-bold text-brown-900">スキルレベルの定義</h3>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-brown-600 hover:bg-sand-100 hover:text-brown-900 transition-colors"
                        aria-label="閉じる"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* レベル一覧 */}
                <div className="px-6 py-5 space-y-4">
                    {skillLevels.map((item) => (
                        <div key={item.level} className="flex gap-4 items-start">
                            {/* レベルバー */}
                            <div className="flex-shrink-0 pt-0.5">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-5 h-1.5 rounded-full ${
                                                i < item.bars
                                                    ? "bg-brown-700"
                                                    : "bg-sand-200"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* テキスト */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-xs font-bold text-brown-500 tabular-nums">
                                        Lv.{item.level}
                                    </span>
                                    <span className="text-sm font-bold text-brown-900">
                                        {item.label}
                                    </span>
                                </div>
                                <p className="text-xs text-brown-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* フッター */}
                <div className="px-6 py-3 bg-sand-50 border-t border-sand-200">
                    <p className="text-xs text-brown-400 text-center">
                        バーの数がスキルレベルを表しています
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SkillLevelModal;
