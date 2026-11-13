// دیتابیس مشتریان سایت مبین گرجی‌زاده
const clientDatabase = {
    "mobin.gorjizadeh": {
        name: "مبین",
        pass: "mobin1130",
        domain: "mobin.cam",
        url: "https://mobin.cam",
        price: "۱۵,۰۰۰,۰۰۰ تومان",
        status: "پرداخت شده (تایید شده)",
        statusColor: "#00ff64",
        serverStatus: "سرور فعال و پایدار 🟢",
        deliveryTime: "تحویل شده", // فقط یکی از دو حالت: مثلا "۱۰ روز" یا "تحویل شده"
        progress: 100
    },
    "am.gorji": {
        name: "امین",
        pass: "amin4275",
        domain: "ثبت نشده (❌)",
        url: "#",
        price: "توافقی / در انتظار تعیین",
        status: "پرداخت نشده",
        statusColor: "#ff4d4d",
        serverStatus: "❌🚨",
        deliveryTime: "100000 روز", // فقط یکی از دو حالت: مثلا "۱۰ روز" یا "تحویل شده"
        progress: 1
    }
};
