import {useState} from "react";

//cara membuat object menggunakan function commponent dan react hook
const Object = () => {
    //object menggunakan usestate
    let [mtr, setMtr] = useState(
        {
        //key     value      gabungan key dan value itu disebut property
        merek : "Honda",
        jenis : "Vario",
        warna : "Hitam",
        bensin : 20,
        harga : 14000000,
        plat : "DK3356MC",
        status : "OFF",

        //Metod menyalakan mesin
        nyalakan : () => {
            console.log ('nyalakan mesin');
            setMtr ( data => {
                return {
                    ...data,
                    status : "ON",
                    bensin : data.bensin - 5,
                    }
                }
            )
            console.log (mtr)
            },
        
        //method mematikan mesin
        matikan : () => {
            console.log ('mematikan mesin');
            setMtr ( data => {
                return {
                    ...data,
                    status : "OFF",
                    }
                }
            )
            console.log (mtr)
            },
        
        //Method isi bensin
        isibensin : () => {
            console.log ('mengisi bensin');
            setMtr ( data => {
                return {
                    ...data,
                    bensin : data.bensin + 20,
                     }
                }
            )
            console.log (mtr)
            },

           
        }
    )
    // object menggunakan function commponent 
    const motor = {
        //key     value      gabungan key dan value itu disebut property
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
            {/* cara memanggil object menggunakan fuction commponent

                <li>Merek : {motor.merek}</li>
                <li>Jenis : {motor.jenis}</li>
                <li>Warna : {motor.warna}</li>
                <li>Bensin : {motor.bensin}</li>
                <li>Pat Nomor : {motor.harga}</li>
                <li>status : {motor.status}</li> */}

                {/* cara memanggil object menggunakan state hook  */}
                <li>Merek : {mtr.merek}</li>
                <li>Jenis : {mtr.jenis}</li>
                <li>Warna : {mtr.warna}</li>
                <li>Bensin : {mtr.bensin} L</li>
                <li>Pat Nomor : {mtr.harga}</li>
                <li>status : {mtr.status}</li>
            </ul>
            <button onClick ={() => mtr.nyalakan ()}>Hidupkan</button>
            <button onClick ={mtr.matikan}>Hidupkan</button>
            <button onClick ={mtr.isibensin}>Isi Bensin</button>
         
           
        </div>
    )
}

export default Object;