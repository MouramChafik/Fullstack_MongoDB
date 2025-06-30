import React from "react";

const stats = [
    { label: "Utilisateurs", value: 120 },
    { label: "Projets", value: 34 },
    { label: "Tâches en cours", value: 18 },
    { label: "Notifications", value: 5 },
];

const recentActivities = [
    { time: "Il y a 2 min", activity: "Nouvel utilisateur inscrit" },
    { time: "Il y a 10 min", activity: "Projet ajouté" },
    { time: "Il y a 1h", activity: "Tâche complétée" },
];

export default function Dashboard() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", background: "#f4f6fa", minHeight: "100vh", padding: 32 }}>
            <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24, color: "#22223b" }}>Tableau de bord</h1>
            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            background: "#fff",
                            borderRadius: 16,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                            padding: 24,
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ fontSize: 40, fontWeight: 700, color: "#4f8cff" }}>{stat.value}</span>
                        <span style={{ fontSize: 16, color: "#6c757d", marginTop: 8 }}>{stat.label}</span>
                    </div>
                ))}
            </div>
            <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
                <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: "#22223b" }}>Activités récentes</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {recentActivities.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: idx !== recentActivities.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                            <span style={{ color: "#22223b" }}>{item.activity}</span>
                            <span style={{ color: "#adb5bd", fontSize: 14 }}>{item.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}