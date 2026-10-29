
const form = document.getElementById("redeem-form");
const voucherInput = document.getElementById("voucher");
const message = document.getElementById("message");

// Demonstration vouchers only.
// These are not real or redeemable financial instruments.
const demoVouchers = {
    DEMO123: { amount: 100, status: "available" },
    DEMO456: { amount: 250, status: "available" },
    USED789: { amount: 50, status: "redeemed" }
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const code = voucherInput.value.trim().toUpperCase();
    const voucher = demoVouchers[code];

    message.textContent = "";
    message.style.color = "#b42318";

    if (!voucher) {
        message.textContent =
            "Voucher not found. Try a demonstration code.";
        return;
    }

    if (voucher.status === "redeemed") {
        message.textContent =
            "This demonstration voucher has already been used.";
        return;
    }

    message.style.color = "#108763";
    message.textContent =
        `Demo voucher valid: R${voucher.amount.toFixed(2)}. ` +
        "No money has been transferred.";
});

voucherInput.addEventListener("input", function () {
    message.textContent = "";
});
