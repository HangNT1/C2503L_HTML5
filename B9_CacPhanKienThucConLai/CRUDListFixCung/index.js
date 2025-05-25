let listSinhVien = [
  {
    mssv: "HE130001",
    ten: "Nguyen Van A",
    tuoi: 20,
    gioiTinh: "Nam",
    chuyenNganh: "CNTT",
    diaChi: "Hà Nội",
  },
  {
    mssv: "HE130002",
    ten: "Tran Thi B",
    tuoi: 21,
    gioiTinh: "Nữ",
    chuyenNganh: "Kinh tế",
    diaChi: "Hải Phòng",
  },
  {
    mssv: "HE130003",
    ten: "Le Van C",
    tuoi: 22,
    gioiTinh: "Nam",
    chuyenNganh: "Ngoại ngữ",
    diaChi: "Đà Nẵng",
  },
  {
    mssv: "HE130004",
    ten: "Pham Thi D",
    tuoi: 23,
    gioiTinh: "Nữ",
    chuyenNganh: "CNTT",
    diaChi: "Cần Thơ",
  },
  {
    mssv: "HE130005",
    ten: "Do Van E",
    tuoi: 24,
    gioiTinh: "Nam",
    chuyenNganh: "Kinh tế",
    diaChi: "Huế",
  },
  {
    mssv: "HE130006",
    ten: "Nguyen Thi F",
    tuoi: 25,
    gioiTinh: "Nữ",
    chuyenNganh: "Ngoại ngữ",
    diaChi: "Nha Trang",
  },
  {
    mssv: "HE130007",
    ten: "Vo Van G",
    tuoi: 26,
    gioiTinh: "Nam",
    chuyenNganh: "CNTT",
    diaChi: "Bình Dương",
  },
  {
    mssv: "HE130008",
    ten: "Hoang Thi H",
    tuoi: 27,
    gioiTinh: "Nữ",
    chuyenNganh: "Kinh tế",
    diaChi: "Quảng Ninh",
  },
  {
    mssv: "HE130009",
    ten: "Bui Van I",
    tuoi: 28,
    gioiTinh: "Nam",
    chuyenNganh: "Ngoại ngữ",
    diaChi: "Lâm Đồng",
  },
  {
    mssv: "HE130010",
    ten: "Dang Thi K",
    tuoi: 29,
    gioiTinh: "Nữ",
    chuyenNganh: "CNTT",
    diaChi: "Hà Tĩnh",
  },
];

let mssvCanSua = null; // lưu MSSV cần sửa

function hienThiDuLieu() {
  const tbody = document.getElementById("table-data");
  tbody.innerHTML = ""; // reset lai table truoc khi hien thi

  for (let i = 0; i < listSinhVien.length; i++) {
    const sv = listSinhVien[i];
    tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${sv.mssv}</td>
          <td>${sv.ten}</td>
          <td>${sv.tuoi}</td>
          <td>${sv.diaChi}</td>
          <td>${sv.gioiTinh}</td>
          <td>${sv.chuyenNganh}</td>
          <td>
            <button onclick="xoaSinhVien('${sv.mssv}')">Xoá</button>
            <button onclick="detailSinhVien(${sv.mssv})">Sửa</button>
          </td>
        </tr>`;
  }
}

function xoaSinhVien(mssv) {
  // listSinhVien = listSinhVien.filter((sv) => sv.mssv !== mssv);
  const index = listSinhVien.findIndex((sv) => sv.mssv === mssv);
  listSinhVien.splice(index, 1);
  hienThiDuLieu();
}

function detailSinhVien(mssv) {
  const sv = listSinhVien.find((sv) => sv.mssv === mssv);
  if (!sv) return;

  const inputs = document.getElementsByClassName("inputText");
  for (let i = 0; i < inputs.length; i++) {
    const field = inputs[i].getAttribute("data-field");
    if (inputs[i].type === "radio") {
      inputs[i].checked = inputs[i].value === sv[field];
    } else {
      inputs[i].value = sv[field];
    }
  }

  mssvCanSua = mssv;
}

function layDuLieuForm() {
  const sv = {};
  const inputs = document.getElementsByClassName("inputText");

  for (let i = 0; i < inputs.length; i++) {
    const field = inputs[i].getAttribute("data-field");
    if (inputs[i].type === "radio") {
      if (inputs[i].checked) {
        sv[field] = inputs[i].value;
      }
    } else {
      sv[field] = inputs[i].value;
    }
  }

  sv.tuoi = parseInt(sv.tuoi);
  return sv;
}

function updateSinhVien() {
  const svMoi = layDuLieuForm();
  const index = listSinhVien.findIndex((sv) => sv.mssv === mssvCanSua);

  if (index !== -1) {
    listSinhVien[index] = svMoi;
  }

  mssvCanSua = null;
  hienThiDuLieu();
  resetData();
}

function addSinhVien() {
  const svMoi = layDuLieuForm();
  listSinhVien.push(svMoi);
  hienThiDuLieu();
  resetData();
}

function resetData() {
  const inputs = document.getElementsByClassName("inputText");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "radio") {
      inputs[i].checked = inputs[i].value === "Nam";
    } else {
      inputs[i].value = "";
    }
  }
  mssvCanSua = null;
}

hienThiDuLieu();
