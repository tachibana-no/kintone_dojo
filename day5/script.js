//HTMLにテクストフォームとボタンを用意して
//郵便番号を入力してボタンを押すと、住所を取得する
//取得した住所をフルでアラートに表示する

(() => {
    "use strict";

    const getAddress = async (zipcode) => {
        const res = await axios.get('https://api.zipaddress.net/', {
            params: {
                zipcode: zipcode,
            },
        });
        return res.data.data.fullAddress;
    };
};




document.getElementById("button").onclick = async () => {
    const formZipcode = document.getElementsByClassName("form")[0].value;

    if (formZipcode !== "") {
        const result_obj = await getAddress(formZipcode);
        window.alert(result_obj);
    }


}

console.log(getAddress(6180015));

}) ();


