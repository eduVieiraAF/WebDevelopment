const colors = {
    p : '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64ddd17',
    standard: "#616161",
    get(tag) {
        return this[tag] ? this[tag] : this.standard
    }
}

document.querySelectorAll('.tag').forEach(element => {
    const tagName = element.tagName.toLowerCase()

    element.style.borderColor = colors.get(tagName)

    if (!element.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = `${tagName} → `
        element.insertBefore(label, element.childNodes[0])
    }
})