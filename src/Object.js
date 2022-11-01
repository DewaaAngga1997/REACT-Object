//cara membuat object menggunakan function commponent
const Object = () => {
    const motor = {
        //property
        merek : "Honda",
        jenis : "Vario",
        warna : "Hitam",
        bensin : 20,
        harga : 14000000,
        plat : "DK3356MC",
        status : "OFF",

        //Metod
        nyalakan : () => {
            console.log ('nyalakan mesin');
            motor.status = "ON"
            console.log (motor.status)
        }

    }
    return (
        <div>
            <h1>Motor</h1>
            <ul>
                <li>Merek : {motor.merek}</li>
                <li>Jenis : {motor.jenis}</li>
                <li>Warna : {motor.warna}</li>
                <li>Bensin : {motor.bensin}</li>
                <li>Pat Nomor : {motor.harga}</li>
                <li>status : {motor.status}</li>
            </ul>
            <button onClick ={() => motor.nyalakan ()}>Hidupkan</button>
            <button>Matikan</button>
            <button>Isi Bensin</button>
        </div>
    )
}

export default Object;