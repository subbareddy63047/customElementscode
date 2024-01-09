let Obj = ({
    "deliveryLocations": [{
            "pincode": "110001",
            "estimatedDeliveryDays": 2,
            "locationName": "Connaught Place, Delhi"
        },
        {
            "pincode": "400001",
            "estimatedDeliveryDays": 3,
            "locationName": "Fort, Mumbai"
        },
        {
            "pincode": "700001",
            "estimatedDeliveryDays": 4,
            "locationName": "Dalhousie Square, Kolkata"
        },
        {
            "pincode": "600001",
            "estimatedDeliveryDays": 3,
            "locationName": "Parrys Corner, Chennai"
        },
        {
            "pincode": "500001",
            "estimatedDeliveryDays": 2,
            "locationName": "Afzal Gunj, Hyderabad"
        },
        {
            "pincode": "110020",
            "estimatedDeliveryDays": 5,
            "locationName": "Hauz Khas, Delhi"
        },
        {
            "pincode": "400020",
            "estimatedDeliveryDays": 4,
            "locationName": "Worli, Mumbai"
        },
        {
            "pincode": "700020",
            "estimatedDeliveryDays": 3,
            "locationName": "Salt Lake City, Kolkata"
        },
        {
            "pincode": "600020",
            "estimatedDeliveryDays": 2,
            "locationName": "Anna Nagar, Chennai"
        },
        {
            "pincode": "500020",
            "estimatedDeliveryDays": 4,
            "locationName": "Banjara Hills, Hyderabad"
        }
    ]
})

class ProductTag extends HTMLElement {
    constructor() {
        super();
        this.InputEle = this.querySelector(".in");
        this.InputEle.addEventListener("keypress", (event) => {
            if (event.which < 48 || event.which > 57 || event.target.value.length === 6) {
                event.preventDefault();
            }
        });
        this.InputEle.addEventListener("click", () => {
            this.InputEle.value = "";
        });
        this.formEle = this.querySelector(".button-container");
        this.formEle.addEventListener("submit", () => {
            event.preventDefault();
            this.index = Obj["deliveryLocations"].findIndex(each => {
                if (each["pincode"] === this.InputEle.value) {
                    return true;
                } else {
                    return false;
                }
            });

            if (this.index !== -1) {
                const {
                    estimatedDeliveryDays
                } = Obj["deliveryLocations"][this.index];
                const dateObj = new Date();
                const estimatedDelivery = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + 1 + estimatedDeliveryDays);
                const estimatedDate = (estimatedDelivery.toString().split(" "));
                const results = `${estimatedDate[0]},${estimatedDate[2]} ${estimatedDate[1]}`;
                this.querySelector(".sucess-text").textContent = "Estimated Delivery";
                this.querySelector(".date").textContent = results;
                this.querySelector(".date").style.color = "green";
            } else {
                this.querySelector(".sucess-text").textContent = "Estimated Delivery";
                this.querySelector(".date").textContent = "Area not Serviceable";
                this.querySelector(".date").style.color = "red";
            }


        });
    }
}
window.customElements.define("product-tag", ProductTag)