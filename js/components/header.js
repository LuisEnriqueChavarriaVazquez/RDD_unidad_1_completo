function inyectHeader(){
    let footer = `
    <div id="icoNavIpn"></div>
      <div class="titleNavIpnContainer">
        <p class="titleNavIpn white-text">Recurso Didáctico Digital</p>
      </div>
    <div id="icoNavEscom"></div>
    `;
    let footerListener = document.getElementById('nav-superior');
    footerListener.innerHTML = footer;
}

inyectHeader();