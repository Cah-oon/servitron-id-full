"use client";
import { useEffect, useState } from "react";

export default function FirmwareList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openFw, setOpenFw] = useState(true);
  const [openTv, setOpenTv] = useState(true);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterType, setFilterType] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => {
    // baca filter dari URL tanpa useSearchParams biar tidak blank
    const params = new URLSearchParams(window.location.search);
    const b = params.get("brand") || "";
    const t = params.get("type") || "";
    const qq = params.get("q") || "";
    setFilterBrand(b);
    setFilterType(t);
    setQ(qq);

    const URL_SB = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    let url = `${URL_SB}/rest/v1/firmwares?select=*&order=created_at.desc`;
    if (b) url += `&brand=eq.${encodeURIComponent(b)}`;
    if (t) url += `&type=eq.${encodeURIComponent(t)}`;
    if (qq) url += `&model=ilike.%${encodeURIComponent(qq)}%`;

    fetch(url, { headers: { apikey: KEY!, Authorization: `Bearer ${KEY}` } })
      .then((r) => r.json())
      .then((d) => {
        setData(d || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const go = (path: string) => {
    window.location.href = path;
  };

  if (loading)
    return <div style={{ background: "#050A14", minHeight: "100vh", color: "#fff", display: "grid", placeItems: "center", fontFamily: "sans-serif" }}>Loading...</div>;

  return (
    <div style={{ background: "#050A14", minHeight: "100vh", color: "#fff", fontFamily: "sans-serif" }}>
      {/* HEADER */}
      <div style={{ height: 56, background: "#080D1A", borderBottom: "1px solid #1a2336", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="/" style={{ textDecoration: "none", color: "#fff", fontWeight: 900, fontSize: 15 }}>SERVITRON.ID</a>
          <span style={{ color: "#333" }}>/</span>
          <span style={{ color: "#0A84FF", fontSize: 12, fontWeight: 700 }}>Firmware {filterBrand ? `- ${filterBrand}` : ""}</span>
        </div>
        <button onClick={() => setOpenMenu(!openMenu)} style={{ width: 42, height: 42, borderRadius: 10, background: "#0C1426", border: "1px solid #1e2d4a", color: "#fff", fontSize: 20 }}>☰</button>
      </div>

      {/* MENU OVERLAY */}
      {openMenu && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.75)" }} onClick={() => setOpenMenu(false)}>
          <div style={{ position: "absolute", right: 0, top: 0, width: 300, height: "100%", background: "#0A0F1E", borderLeft: "1px solid #1e2d4a", padding: 16, overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <b style={{ fontSize: 14 }}>MENU KATEGORI</b>
              <button onClick={() => setOpenMenu(false)} style={{ width: 32, height: 32, borderRadius: 8, background: "#1a2336", border: "none", color: "#fff" }}>✕</button>
            </div>

            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
              <a href="/firmware" style={{ padding: 12, background: !filterBrand && !filterType ? "#0A84FF" : "#0C1426", borderRadius: 10, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 700 }}>📁 Semua Firmware</a>

              <div style={{ background: "#0C1426", borderRadius: 10, border: "1px solid #1e2d4a", overflow: "hidden" }}>
                <button onClick={() => setOpenFw(!openFw)} style={{ width: "100%", padding: 12, background: "transparent", border: "none", color: "#fff", textAlign: "left", fontSize: 13, fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                  <span>📁 Firmware</span><span>{openFw ? "▲" : "▼"}</span>
                </button>
                {openFw && (
                  <div style={{ padding: 6, display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ background: "#050A14", borderRadius: 8, overflow: "hidden" }}>
                      <button onClick={() => setOpenTv(!openTv)} style={{ width: "100%", padding: "10px 12px", border: "none", background: "transparent", color: "#0A84FF", textAlign: "left", fontSize: 12, fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                        <span>📺 Firmware TV</span><span>{openTv ? "▲" : "▼"}</span>
                      </button>
                      {openTv && (
                        <div style={{ padding: "0 6px 6px 6px", display: "flex", flexDirection: "column", gap: 4 }}>
                          {["Polytron", "LG", "Samsung", "Sharp", "TCL", "Hisense", "Coocaa", "Philips", "Aqua", "Changhong"].map((b) => (
                            <button key={b} onClick={() => go(`/firmware?brand=${b}`)} style={{ padding: "9px 12px", background: filterBrand === b ? "#0A84FF" : "#0C1426", borderRadius: 6, color: "#fff", border: "none", textAlign: "left", fontSize: 12 }}>{filterBrand === b ? "✓ " : "→ "}{b}</button>
                          ))}
                        </div>
                      )}
                    </div>
                    <button onClick={() => go("/firmware?type=STB")} style={{ padding: "10px 12px", background: filterType === "STB" ? "#0A84FF" : "#050A14", borderRadius: 8, color: "#fff", border: "none", textAlign: "left", fontSize: 12 }}>📡 Firmware STB</button>
                    <button onClick={() => go("/firmware?type=Speaker")} style={{ padding: "10px 12px", background: filterType === "Speaker" ? "#0A84FF" : "#050A14", borderRadius: 8, color: "#fff", border: "none", textAlign: "left", fontSize: 12 }}>🔊 Firmware Speaker</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ fontSize: 20, fontWeight: 800 }}>📁 {filterBrand ? `Firmware ${filterBrand}` : filterType ? `Firmware ${filterType}` : `Daftar Firmware`} ({data.length})</h1>
        <p style={{ color: "#666", fontSize: 12, marginTop: 4 }}>Live dari Supabase • QRIS Ready {filterBrand ? `• Filter: ${filterBrand}` : ""}</p>

        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {filterBrand && <button onClick={() => go("/firmware")} style={{ background: "#0A84FF", color: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 11, border: "none" }}>✕ Hapus {filterBrand}</button>}
          {["Polytron", "LG", "Samsung", "Sharp"].map((b) => (
            <button key={b} onClick={() => go(`/firmware?brand=${b}`)} style={{ background: filterBrand === b ? "#0A84FF" : "#0C1426", border: "1px solid #1e2d4a", color: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 11 }}>{b}</button>
          ))}
        </div>

        <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
          {data.map((fw: any) => (
            <a key={fw.id} href={`/firmware/${fw.model_slug}`} style={{ background: "#0C1426", border: "1px solid #1e2d4a", borderRadius: 14, padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none" }}>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{fw.brand} {fw.model}</div>
                <div style={{ color: "#666", fontSize: 11, marginTop: 3 }}>{fw.mainboard} | {fw.chipset} | {fw.size}</div>
              </div>
              <div style={{ background: "#0A84FF", color: "#fff", padding: "6px 12px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>Buka</div>
            </a>
          ))}
          {data.length === 0 && <div style={{ color: "#666", textAlign: "center", marginTop: 40, fontSize: 12 }}>Belum ada firmware {filterBrand || filterType}. Cek di Supabase.</div>}
        </div>
      </div>
    </div>
  );
}
