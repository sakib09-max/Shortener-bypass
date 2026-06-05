(function () {
  "use strict";

  if (typeof window.RAMA_BOOKMARK_LOAD === "undefined") {
    console.log("%cAccess Denied - Bookmark Required", "color:#ff0000;font-size:15px;font-weight:bold");
    return;
  }

  const _0x5e548e = {
    r: "https://raw.githubusercontent.com/sakib09-max/Shortener-bypass/main/xtremex.txt"
  };

  (async function () {

    // REMOVE EXISTING AUTH BOX IF PRESENT
    const _0x40e08f = document.getElementById("rama-auth-box");
    if (_0x40e08f) {
      _0x40e08f.remove();
    }

    // LOADING OVERLAY
    const _0x4761a5 = document.createElement("div");
    _0x4761a5.style.cssText = `
      position:fixed; top:0; left:0; width:100%; height:100%;
      background:rgba(2,4,10,0.85); z-index:2147483647;
      display:flex; align-items:center; justify-content:center;
      font-family:sans-serif;
    `;
    _0x4761a5.innerHTML = `
      <div style="text-align:center; background:#02040a; padding:30px; border-radius:12px; border:2px solid #00ffcc; box-shadow:0 10px 30px rgba(0,0,0,0.8); width:280px;">
        <div style="width:50px; height:50px; border:5px solid #1a2338; border-top:5px solid #00ffcc; border-radius:50%; margin:0 auto 20px auto; animation:rama-spin 1s linear infinite;"></div>
        <p id="rama-check-text" style="color:#00ffcc; font-size:16px; font-weight:bold; margin:0; letter-spacing:1px;">LOADING...</p>
      </div>
      <style>
        @keyframes rama-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      </style>
    `;
    document.body.appendChild(_0x4761a5);

    // FETCH REDIRECT URL
    try {
      const _0x3c8fd6 = await fetch(_0x5e548e.r + "?t=" + Date.now());
      const _0x4165b7 = (await _0x3c8fd6.text()).trim();

      if (_0x4165b7.startsWith("http")) {

        await new Promise(_0x36ccc0 => setTimeout(_0x36ccc0, 1500));
        _0x4761a5.remove();

        // Countdown overlay
        const _0x384096 = document.createElement("div");
        _0x384096.style.cssText = `
          position:fixed; top:0; left:0; width:100%; height:100%;
          background:rgba(2,4,10,0.02); z-index:2147483647;
          display:flex; align-items:center; justify-content:center;
        `;

        const _0x4779a6 = Math.floor(Math.random() * 4) + 22;
        _0x384096.innerHTML = `
          <div style="text-align:center;">
            <div style="position:relative; width:220px; height:220px; margin:0 auto;">
              <svg width="220" height="220" style="transform:rotate(-90deg);">
                <circle cx="110" cy="110" r="98" fill="none" stroke="#1a2338" stroke-width="18"></circle>
                <circle id="progress" cx="110" cy="110" r="98" fill="none"
                  stroke="#00ffcc" stroke-width="18"
                  stroke-dasharray="615" stroke-dashoffset="615"
                  stroke-linecap="round"></circle>
              </svg>
              <div id="countdown-text" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:46px; font-weight:bold; color:#00ffcc;">${_0x4779a6}</div>
            </div>
            <p style="margin-top:25px; color:#00ffcc; font-size:18px; font-weight:bold;">REDIRECTING...</p>
          </div>
        `;
        document.body.appendChild(_0x384096);

        let _0x48150c = _0x4779a6;
        const _0x22958b = _0x384096.querySelector("#progress");
        const _0x17b3dc = _0x384096.querySelector("#countdown-text");
        const _0x3094fb = 615;

        // COUNTDOWN TIMER
        const _0x16f2c2 = setInterval(() => {
          _0x48150c--;
          _0x17b3dc.textContent = _0x48150c;
          const _0x9aa335 = _0x3094fb * (_0x48150c / _0x4779a6);
          _0x22958b.style.strokeDashoffset = _0x9aa335;
          if (_0x48150c <= 0) {
            clearInterval(_0x16f2c2);
            _0x384096.remove();
            window.location.replace(_0x4165b7);
          }
        }, 1000);
      } else {
        _0x4761a5.remove();
        alert("Redirect URL not found!");
      }
    } catch (_0x5efef6) {
      _0x4761a5.remove();
      alert("Server Error!");
    }

  })();
})();
