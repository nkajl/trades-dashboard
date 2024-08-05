document.addEventListener('DOMContentLoaded', function () {
    const alphabetContainer = document.getElementById('alphabet-container');

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    letters.forEach(letter => {
        const span = document.createElement('span');
        span.className = 'alphabet-letter';
        span.textContent = letter;
        alphabetContainer.appendChild(span);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tipSpan = document.querySelector(".add-customer-tip-span");
    const tipContent = document.querySelector(".customer-tip-content");

    tipSpan.addEventListener("mouseover", function () {
        tipContent.style.display = "block";
    });

    tipSpan.addEventListener("mouseout", function () {
        tipContent.style.display = "none";
    });
});


const toggleButton = document.getElementById("toggle-button");
const applyButton = document.getElementById("action-button-apply");
const resetButton = document.getElementById("action-button-reset");
const tradeFilter = document.getElementById("trades-filter");

const showTradesFilterButton = document.getElementById("show-trades-filter");
const closeTradesFilterButton = document.getElementById("close-trades-filter");

toggleButton.addEventListener("click", toggleFilter);

function toggleFilter() {
    if (tradeFilter.style.display === "flex" || tradeFilter.style.display === "") {
        tradeFilter.style.display = "none";
        applyButton.style.display = "none";
        resetButton.style.display = "none";
        closeTradesFilterButton.style.display = "none"
        showTradesFilterButton.style.display = "flex"
        // toggleButton.innerText = "Show";
    } else {
        tradeFilter.style.display = "flex";
        applyButton.style.display = "flex";
        resetButton.style.display = "flex";
        closeTradesFilterButton.style.display = "flex"
        showTradesFilterButton.style.display = "none"
        // toggleButton.innerText = "Hide";
    }
}

const customerApplyButton = document.getElementById("customer-filter-apply");
const customerResetButton = document.getElementById("customer-filter-reset");
const toggleCustomerButton = document.getElementById("customer-toggle-button");
const customerFilter = document.getElementById("customer-filter");

const showFilterButton = document.getElementById("show-customer-filter");
const closeFilterButton = document.getElementById("close-customer-filter");

toggleCustomerButton.addEventListener("click", toggleCustomerFilter);

function toggleCustomerFilter() {
    if (customerFilter.style.display === "flex" || customerFilter.style.display === "") {
        customerFilter.style.display = "none";
        customerApplyButton.style.display = "none";
        customerResetButton.style.display = "none";
        closeFilterButton.style.display = "none"
        showFilterButton.style.display = "flex"
        // toggleCustomerButton.innerText = "Show";
    } else {
        customerFilter.style.display = "flex";
        customerApplyButton.style.display = "flex";
        customerResetButton.style.display = "flex";
        closeFilterButton.style.display = "flex"
        showFilterButton.style.display = "none"
        // toggleCustomerButton.innerText = "Hide";
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const mainCheckbox = document.querySelector('.th-checkbox');
    const rowCheckboxes = document.querySelectorAll('.td-checkbox');

    mainCheckbox.addEventListener('change', function () {
        rowCheckboxes.forEach(checkbox => checkbox.checked = mainCheckbox.checked);
    });

    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const someChecked = Array.from(rowCheckboxes).some(cb => cb.checked);
            mainCheckbox.checked = someChecked;
        });
    });
});


const closeTip = document.getElementById("close-import-tip")
const tipWindow = document.getElementById("import-customer-window")
closeTip.addEventListener("click", () => {
    tipWindow.style.display = "none"
})

