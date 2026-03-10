function openTab(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    var tablinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function menuAction(menuName) {
    if (menuName === 'Keluar') {
        const konfirmasi = confirm("Apakah Anda yakin ingin keluar?");
        if (konfirmasi) {
                window.location.href = "index.html";
            }
        }
    }  document.getElementById('clickableContainer').addEventListener('click', goToLogin);

function loginAsUser() {
    window.location.href = 'index2.html';
}

function continueAsGuest() {
    sessionStorage.setItem('userType', 'guest');
    window.location.href = 'index2.html';
}

function openImage(imageUrl) {
    const imageModal = document.createElement('div');
    imageModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    imageModal.innerHTML = `
        <img src="${imageUrl}" 
             style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 10px;"
             onerror="this.src='https://via.placeholder.com/500?text=Gambar+Tidak+Dapat+Dimuat'">
        <button style="position: absolute; top: 20px; right: 20px; background: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 20px; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.3);" onclick="this.parentElement.remove()">✕</button>
    `;
    
    imageModal.onclick = function(e) {
        if (e.target === imageModal) {
            imageModal.remove();
        }
    };
    
    document.body.appendChild(imageModal);
}