const HTML_ELEMENTS = {
    wishesForM : {
        yearOption: (year, enabled) => `<div class="year-item ${enabled ? 'enabled' : ''}" value="${year}">${year}</div>`,
        wishOption: (wishIndex, wishName) => `<div class="wish-item enabled" value="${wishIndex}">${wishName}</div>`
    }
}