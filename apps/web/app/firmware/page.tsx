"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getFirmwares(brand?: string, type?: string, q?: string) {
  let url = `${URL}/rest/v1/firmwares?select=*&order=created_at.desc`;
  if (brand) url += `&brand=eq.${encodeURIComponent(brand)}`;
  if (type) url += `&type=eq.${encodeURIComponent(type)}`;
  if (q) url += `&model=ilike.%${encodeURIComponent(q)}%`;
  const r = await fetch(url, {
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
  });
  return r.json();
}

export default function FirmwareList() {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand") || "";
  const type = searchParams.get("type") || "";
  const qParam = searchParams.get("q") || "";

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openFw, setOpenFw] = useState(true);
  const [openTv, setOpenTv] = useState(true);
  const [search, setSearch] = useState(qParam);

  useEffect(() => {
    setLoading(true);
    getFirmwares(brand, type, qParam).then((d) => {
      setData(d || []);
      setLoading(false);
    });
  }, [brand, type, qParam]);

  if (loading)
    return (
      <div style={{ background: "#050A14", minHeight: "100vh", color: "#fff", display: "grid", placeItems: "center" }}>
        Loading firmware {brand || type || "semua"}...
      </div>
    );

  return (
    <div style={{ background: "#050A14", minHeight: "100vh", color: "#fff", fontFamily: "sans-serif" }}>
      {/* HEADER */}
      <div style={{ height: 56, background: "#080D1A", borderBottom: "1px solid #1a2336", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="/" style={{ textDecoration: "none", color: "#fff", fontWeight: 900 }}>SERVITRON.ID</a>
          <span style={{ color: "#444" }}>/</span>
          <span style={{ color: "#0A84FF", fontSize: 13, fontWeight: 700 }}>Firmware</span>
        </div>
        <button onClick={() => setOpenMenu(!openMenu)} style={{ width: 40, height: 40, borderRadius: 10, background: "#0C1426", border: "1px solid #1e2d4a", color: "#fff", fontSize: 20 }}>☰</button>
      </div>

      {/* MENU OVERLAY */}
      {openMenu && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.7)" }} onClick={() => setOpenMenu(false)}>
          <div style={{ position: "absolute", right: 0, top: 0, width: 300, height: "100%", background: "#0A0F1E", borderLeft: "1px solid #1e2d4a", padding: 16, overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>MENU KATEGORI</b>
              <button onClick={() => setOpenMenu(false)} style={{ width: 32, height: 32, borderRadius: 8, background: "#1a2336", border: "none", color: "#fff" }}>✕</button>
            </div>

            <input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (window.location.href = `/firmware?q=${search}`)} placeholder="Cari model TV..." style={{ width: "100%", marginTop: 12, background: "#050A14", border: "1px solid #1e2d4a", borderRadius: 10, padding: "10px 12px", color: "#fff" }} />

            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
              <a href="/firmware" style={{ padding: 12, background: !brand && !type ? "#0A84FF" : "#0C1426", borderRadius: 10, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 700 }}>📁 Semua Firmware ({data.length})</a>

              <div style={{ background: "#0C1426", borderRadius: 10, border: "1px solid #1e2d4a", overflow: "hidden" }}>
                <button onClick={() => setOpenFw(!openFw)} style={{ width: "100%", padding: 12, background: "transparent", border: "none", color: "#fff", textAlign: "left", fontSize: 13, fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                  <span>📁 Kategori Firmware</span><span>{openFw ? "▲" : "▼"}</span>
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
                            <a key={b} href={`/firmware?brand=${b}`} style={{ padding: "8px 12px", background: brand === b ? "#0A84FF" : "#0C1426", borderRadius: 6, color: "#fff", textDecoration: "none", fontSize: 12 }}>{brand === b ? "✓ " : "→ "}{b}</a>
                          ))}
                        </div>
                      )}
                    </div>
                    <a href="/firmware?type=STB" style={{ padding: "10px 12px", background: type === "STB" ? "#0A84FF" : "#050A14", borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 12 }}>📡 Firmware STB</a>
                    <a href="/firmware?type=Speaker" style={{ padding: "10px 12px", background: type === "Speaker" ? "#0A84FF" : "#050A14", borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 12 }}>🔊 Firmware Speaker Aktif</a>
                  </div>
                )}
              </div>
              <a href="/admin/firmware" style={{ padding: 12, background: "#0C1426", border: "1px solid #1e2d4a", borderRadius: 10, color: "#888", textDecoration: "none", fontSize: 12 }}>🛠️ Admin Bulk Upload</a>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ fontSize: 20, fontWeight: 800 }}>
          {brand ? `📺 Firmware ${brand}` : type ? `📁 Firmware ${type}` : "📁 Daftar Firmware"} ({data.length})
        </h1>
        <p style={{ color: "#666", fontSize: 12, marginTop: 4 }}>
          {brand ? `Filter: Brand ${brand} • ` : ""}{type ? `Kategori: ${type} • ` : ""}Live dari Supabase • QRIS Rp 15.000
        </p>

        {/* BREADCRUMB FILTER PILLS */}
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {brand && <a href="/firmware" style={{ background: "#0A84FF", color: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 11, textDecoration: "none" }}>✕ Hapus filter {brand}</a>}
          <a href="/firmware" style={{ background: "#0C1426", border: "1px solid #1e2d4a", color: "#888", padding: "6px 12px", borderRadius: 20, fontSize: 11, textDecoration: "none" }}>Semua</a>
          {["Polytron", "LG", "Samsung", "Sharp"].map((b) => (
            <a key={b} href={`/firmware?brand=${b}`} style={{ background: brand === b ? "#0A84FF" : "#0C1426", border: "1px solid #1e2d4a", color: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 11, textDecoration: "none" }}>{b}</a>
          ))}
        </div>

        {/* GRID */}
        <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
          {data.map((fw: any) => (
            <a key={fw.id} href={`/firmware/${fw.model_slug}`} style={{ background: "#0C1426", border: "1px solid #1e2d4a", borderRadius: 14, padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none" }}>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{fw.brand} {fw.model}</div>
                <div style={{ color: "#666", fontSize: 11, marginTop: 3 }}>{fw.mainboard} | {fw.chipset} | {fw.size}</div>
                <div style={{ color: "#0A84FF", fontSize: 10, marginTop: 4 }}>Brand: {fw.brand} {fw.type ? `• ${fw.type}` : ""}</div>
              </div>
              <div style={{ background: "#0A84FF", color: "#fff", padding: "6px 12px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>Buka</div>
            </a>
          ))}
          {data.length === 0 && <div style={{ color: "#666", textAlign: "center", marginTop: 40 }}>Belum ada firmware {brand || type}. Upload via Admin.</div>}
        </div>
      </div>
    </div>
  );
}
