import { useRegisterSW } from "virtual:pwa-register/react"

export default function ReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW()

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  if (!offlineReady && !needRefresh) return null

  return (
    <div
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: 9999,
        background: "#111",
        color: "#fff",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        maxWidth: "320px",
      }}
    >
      <p style={{ margin: "0 0 12px 0" }}>
        {needRefresh ? "A new version is available." : "App ready for offline use."}
      </p>

      <div style={{ display: "flex", gap: "8px" }}>
        {needRefresh && (
          <button onClick={() => updateServiceWorker(true)}>
            Refresh
          </button>
        )}
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}
