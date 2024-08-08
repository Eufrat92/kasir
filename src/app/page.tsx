import Image from "next/image";
import Inter, { Londrina_Sketch } from "next/font/google"

export default function Main() {
  return<>
    <Navbar/>
    <Pembelian/>
  </>
}

function Login() {
  return(
    <div className="h-screen w-screen bg-gradient-to-b from-[#2E2A53] to-[#675EB9] justify-center items-center flex">
      <div className="w-[350px] h-[250px] bg-white rounded-[25px] p-4 drop-shadow-[0px_6px_0px_#000000] justify-center items-center flex flex-col">
        <div className="justify-start items-start flex flex-col ml-[-124px]">
          <p className="text-[24px] font-bold text-black tracking-[2px]">MASUK</p>
          <p className="text-[12px] font-light underline underline-offset-1 text-black mt-[-10px]">Silahkan masuk ke akun anda</p>
        </div>
        <input type="text" placeholder="Nama Pengguna" className="w-[300px] h-[35px] text-[16px] font-medium text-black bg-[#ffffff] p-2 border-2 border-black rounded-[15px] mt-6"></input>
        <input type="password" placeholder="Kata Sandi" className="w-[300px] h-[35px] text-[16px] font-medium text-black bg-[#ffffff] p-2 border-2 border-black rounded-[15px] mt-5"></input>
        <button className="w-[100px] h-[50px] bg-[#37316F] border-[#2E2A53] border-4 rounded-[15px] mt-6 flex justify-center items-center hover:drop-shadow-[2px_2px_1px_#000000]">
          <p className="text-[18px] text-white tracking-wide">Masuk</p>
        </button>
      </div>
    </div>
  )
}

function Navbar() {
  return(
    <nav className="fixed">
      <div className="h-[50px] w-screen bg-[#37316F] items-center p-3">
        <button className="h-[30px] w-[130px] bg-[#2E2A53] ml-4 rounded-[10px] items-center justify-center hover:border-white hover:border-2">
          <p className="text-[16px]">Pembelian</p>
        </button>
        <button className="h-[30px] w-[130px] rounded-[10px] ml-2 items-center justify-center hover:border-white hover:border-2">
          <p className="text-[16px]">Riwayat</p>
        </button>
        <button className="h-[30px] w-[130px] rounded-[10px] ml-2 items-center justify-center hover:border-white hover:border-2">
          <p className="text-[16px]">Stok</p>
        </button>
        <button className="h-[30px] w-[130px] rounded-[10px] ml-2 items-center justify-center hover:border-white hover:border-2">
          <p className="text-[16px]">Registrasi</p>
        </button>
        <button className="h-[30px] w-[120px] mr-4 bg-black rounded-[10px] float-end flex flex-row items-center justify-center hover:border-white hover:border-2">
          <Image src="/images/logout.png" alt="logout" width={20} height={20} />
          <p className="text-[16px] font-semibold pl-2">Keluar</p>
        </button>
      </div>
    </nav>
  )
}

function Pembelian() {
  return(
    <div className="h-screen w-screen bg-white py-12 p-1 justify-center items-center flex flex-col">
      <div className="flex-row flex justify-center">
        <div className="bg-[#F1F1F1] w-[400px] h-[400px] rounded-[25px] border-[1px] border-black  drop-shadow-[3px_3px_0px_#8A8A8A] mt-8 p-6 flex-col">
          <h1 className="text-[32px] font-bold text-black border-b-2 border-black m-[-8px]">Pembelian</h1>
          <div className="flex flex-row items-center w-[370px] 200 mt-12">
            <p className="text-[18px] w-[150px] text-black font-semibold">Nama Produk</p>
            <input type="text" name="nama" id="nama" placeholder="Nama Produk" className="h-[30px] w-[200px] rounded-[10px] border-[1px] border-black text-black p-2 text-[16px] font-medium"/>
          </div>
          <div className="flex flex-row items-center w-[370px] mt-6">
            <p className="text-[18px] w-[150px] text-black font-semibold">Harga Satuan</p>
            <p className="h-[25px] w-[200px] text-[18px] text-black font-semibold">
              Rp
            </p>
          </div>
          <div className="flex flex-row items-center w-[370px] mt-6">
            <p className="text-[18px] w-[150px] text-black font-semibold">Jumlah</p>
            <input type="number" name="nama" id="nama" min={0} placeholder="Jumlah" className="h-[30px] w-[200px] rounded-[10px] border-[1px] border-black text-black p-2 text-[16px]"/>
          </div>
          <div className="flex flex-row items-center w-[370px] mt-6">
            <p className="text-[18px] w-[150px] text-black font-semibold">Harga Total</p>
            <p className="h-[25px] w-[200px] text-[18px] text-black font-semibold">
              Rp
            </p>
          </div>
          <button className="w-[350px] h-[35px] bg-[#37316F] border-[#2E2A53] border-4 rounded-[15px] mt-12 flex justify-center items-center hover:drop-shadow-[2px_2px_1px_#000000]">
            <p className="text-[18px] text-white tracking-wide">Tambahkan</p>
          </button>
        </div>
        <div className="bg-[#F1F1F1] w-[800px] h-[400px] rounded-[25px] border-[1px] border-black drop-shadow-[3px_3px_0px_#8A8A8A] mt-8 p-6 flex-col ml-12">
          <h1 className="text-[32px] font-bold text-black border-b-2 border-black m-[-8px]">Keranjang</h1>
          <div className="bg-white w-[750px] h-[280px] rounded-[25px] border-[1px] border-black mt-8"></div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] w-[1250px] h-[100px] rounded-[25px] border-[1px] border-black drop-shadow-[3px_3px_0px_#8A8A8A] flex-row flex justify-around items-center mt-8 p-4">      
        <div className="items-center flex flex-col w-[180px]">
          <p className="text-[20px] font-semibold text-black">Total Pembayaran</p>
          <p className="text-[24px] font-bold text-black">Rp</p>
        </div>
        <div className="items-center flex flex-col w-[180px]">
          <p className="text-[20px] font-semibold text-black">Uang Pembayaran</p>
          <p className="text-[24px] font-bold text-black">Rp</p>
        </div>
        <div className="items-center flex flex-col w-[180px]">
          <p className="text-[20px] font-semibold text-black">Kembalian</p>
          <p className="text-[24px] font-bold text-black">Rp</p>
        </div>
      </div>
      <button className="w-[200px] h-[35px] bg-[#37316F] border-[#2E2A53] border-4 rounded-[15px] mx-12 mt-6 flex justify-center items-center hover:drop-shadow-[2px_2px_1px_#000000]">
        <p className="text-[18px] text-white tracking-wide">Bayar</p>
      </button>
    </div>
  )
}