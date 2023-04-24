const valProd001 = document.getElementById("quantity-prod-001");
const addProd001 = document.getElementById("sumar-prod-001");
const subProd001 = document.getElementById("restar-prod-001");
const totalvalProd001 = document.getElementById("cantidad-prod-001");
const actualizaSubtotalProd001 = document.getElementById("subtotal-prod-001");
let cantidadProd001 = 0;
let subtotalProd001 = 0;

const valProd002 = document.getElementById("quantity-prod-002");
const addProd002 = document.getElementById("sumar-prod-002");
const subProd002 = document.getElementById("restar-prod-002");
const totalvalProd002 = document.getElementById("cantidad-prod-002");
const actualizaSubtotalProd002 = document.getElementById("subtotal-prod-002");
let cantidadProd002 = 0;
let subtotalProd002 = 0;

const valProd003 = document.getElementById("quantity-prod-003");
const addProd003 = document.getElementById("sumar-prod-003");
const subProd003 = document.getElementById("restar-prod-003");
const totalvalProd003 = document.getElementById("cantidad-prod-003");
const actualizaSubtotalProd003 = document.getElementById("subtotal-prod-003");
let cantidadProd003 = 0;
let subtotalProd003 = 0;

const valProd004 = document.getElementById("quantity-prod-004");
const addProd004 = document.getElementById("sumar-prod-004");
const subProd004 = document.getElementById("restar-prod-004");
const totalvalProd004 = document.getElementById("cantidad-prod-004");
const actualizaSubtotalProd004 = document.getElementById("subtotal-prod-004");
let cantidadProd004 = 0;
let subtotalProd004 = 0;

const valProd005 = document.getElementById("quantity-prod-005");
const addProd005 = document.getElementById("sumar-prod-005");
const subProd005 = document.getElementById("restar-prod-005");
const totalvalProd005 = document.getElementById("cantidad-prod-005");
const actualizaSubtotalProd005 = document.getElementById("subtotal-prod-005");
let cantidadProd005 = 0;
let subtotalProd005 = 0;

const valProd006 = document.getElementById("quantity-prod-006");
const addProd006 = document.getElementById("sumar-prod-006");
const subProd006 = document.getElementById("restar-prod-006");
const totalvalProd006 = document.getElementById("cantidad-prod-006");
const actualizaSubtotalProd006 = document.getElementById("subtotal-prod-006");
let cantidadProd006 = 0;
let subtotalProd006 = 0;

const valProd007 = document.getElementById("quantity-prod-007");
const addProd007 = document.getElementById("sumar-prod-007");
const subProd007 = document.getElementById("restar-prod-007");
const totalvalProd007 = document.getElementById("cantidad-prod-007");
const actualizaSubtotalProd007 = document.getElementById("subtotal-prod-007");
let cantidadProd007 = 0;
let subtotalProd007 = 0;

const valProd008 = document.getElementById("quantity-prod-008");
const addProd008 = document.getElementById("sumar-prod-008");
const subProd008 = document.getElementById("restar-prod-008");
const totalvalProd008 = document.getElementById("cantidad-prod-008");
const actualizaSubtotalProd008 = document.getElementById("subtotal-prod-008");
let cantidadProd008 = 0;
let subtotalProd008 = 0;

const valProd009 = document.getElementById("quantity-prod-009");
const addProd009 = document.getElementById("sumar-prod-009");
const subProd009 = document.getElementById("restar-prod-009");
const totalvalProd009 = document.getElementById("cantidad-prod-009");
const actualizaSubtotalProd009 = document.getElementById("subtotal-prod-009");
let cantidadProd009 = 0;
let subtotalProd009 = 0;

const valProd010 = document.getElementById("quantity-prod-010");
const addProd010 = document.getElementById("sumar-prod-010");
const subProd010 = document.getElementById("restar-prod-010");
const totalvalProd010 = document.getElementById("cantidad-prod-010");
const actualizaSubtotalProd010 = document.getElementById("subtotal-prod-010");
let cantidadProd010 = 0;
let subtotalProd010 = 0;

let precioComun = 500;

const total = document.getElementById("total");


const actualizaTotal = () => {
    total.textContent = (cantidadProd001 * precioComun) + (cantidadProd002 * precioComun) + (cantidadProd003 * precioComun) + (cantidadProd004 * precioComun) + (cantidadProd005 * precioComun) + (cantidadProd006 * precioComun) + (cantidadProd007 * precioComun) + (cantidadProd008 * precioComun) + (cantidadProd009 * precioComun) + (cantidadProd010 * precioComun);
}


addProd001.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd001.value);
    cantidadProd001 += numberToAdd;
    totalvalProd001.textContent = cantidadProd001;
    actualizaSubtotalProd001.textContent = cantidadProd001 * precioComun;
    actualizaTotal();
});

subProd001.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd001.value);
    cantidadProd001 -= numberToSubtract;
    totalvalProd001.textContent = cantidadProd001;
    actualizaSubtotalProd001.textContent = cantidadProd001 * precioComun;
    actualizaTotal();
});

addProd002.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd002.value);
    cantidadProd002 += numberToAdd;
    totalvalProd002.textContent = cantidadProd002;
    actualizaSubtotalProd002.textContent = cantidadProd002 * precioComun;
    actualizaTotal();
});

subProd002.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd002.value);
    cantidadProd002 -= numberToSubtract;
    totalvalProd002.textContent = cantidadProd002;
    actualizaSubtotalProd002.textContent = cantidadProd002 * precioComun;
    actualizaTotal();
});

addProd003.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd003.value);
    cantidadProd003 += numberToAdd;
    totalvalProd003.textContent = cantidadProd003;
    actualizaSubtotalProd003.textContent = cantidadProd003 * precioComun;
    actualizaTotal();
});

subProd003.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd003.value);
    cantidadProd003 -= numberToSubtract;
    totalvalProd003.textContent = cantidadProd003;
    actualizaSubtotalProd003.textContent = cantidadProd003 * precioComun;
    actualizaTotal();
});

addProd004.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd004.value);
    cantidadProd004 += numberToAdd;
    totalvalProd004.textContent = cantidadProd004;
    actualizaSubtotalProd004.textContent = cantidadProd004 * precioComun;
    actualizaTotal();
});

subProd004.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd004.value);
    cantidadProd004 -= numberToSubtract;
    totalvalProd004.textContent = cantidadProd004;
    actualizaSubtotalProd004.textContent = cantidadProd004 * precioComun;
    actualizaTotal();
});

addProd005.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd005.value);
    cantidadProd005 += numberToAdd;
    totalvalProd005.textContent = cantidadProd005;
    actualizaSubtotalProd005.textContent = cantidadProd005 * precioComun;
    actualizaTotal();
});

subProd005.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd005.value);
    cantidadProd005 -= numberToSubtract;
    totalvalProd005.textContent = cantidadProd005;
    actualizaSubtotalProd005.textContent = cantidadProd005 * precioComun;
    actualizaTotal();
});

addProd006.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd006.value);
    cantidadProd006 += numberToAdd;
    totalvalProd006.textContent = cantidadProd006;
    actualizaSubtotalProd006.textContent = cantidadProd006 * precioComun;
    actualizaTotal();
});

subProd006.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd006.value);
    cantidadProd006 -= numberToSubtract;
    totalvalProd006.textContent = cantidadProd006;
    actualizaSubtotalProd006.textContent = cantidadProd006 * precioComun;
    actualizaTotal();
});

addProd007.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd007.value);
    cantidadProd007 += numberToAdd;
    totalvalProd007.textContent = cantidadProd007;
    actualizaSubtotalProd007.textContent = cantidadProd007 * precioComun;
    actualizaTotal();
});

subProd007.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd007.value);
    cantidadProd007 -= numberToSubtract;
    totalvalProd007.textContent = cantidadProd007;
    actualizaSubtotalProd007.textContent = cantidadProd007 * precioComun;
    actualizaTotal();
});

addProd008.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd008.value);
    cantidadProd008 += numberToAdd;
    totalvalProd008.textContent = cantidadProd008;
    actualizaSubtotalProd008.textContent = cantidadProd008 * precioComun;
    actualizaTotal();
});

subProd008.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd008.value);
    cantidadProd008 -= numberToSubtract;
    totalvalProd008.textContent = cantidadProd008;
    actualizaSubtotalProd008.textContent = cantidadProd008 * precioComun;
    actualizaTotal();
});

addProd009.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd009.value);
    cantidadProd009 += numberToAdd;
    totalvalProd009.textContent = cantidadProd009;
    actualizaSubtotalProd009.textContent = cantidadProd009 * precioComun;
    actualizaTotal();
});

subProd009.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd009.value);
    cantidadProd009 -= numberToSubtract;
    totalvalProd009.textContent = cantidadProd009;
    actualizaSubtotalProd009.textContent = cantidadProd009 * precioComun;
    actualizaTotal();
});

addProd010.addEventListener("click", () => {
    const numberToAdd = parseInt(valProd010.value);
    cantidadProd010 += numberToAdd;
    totalvalProd010.textContent = cantidadProd010;
    actualizaSubtotalProd010.textContent = cantidadProd010 * precioComun;
    actualizaTotal();
});

subProd010.addEventListener("click", () => {
    const numberToSubtract = parseInt(valProd010.value);
    cantidadProd010 -= numberToSubtract;
    totalvalProd010.textContent = cantidadProd010;
    actualizaSubtotalProd010.textContent = cantidadProd010 * precioComun;
    actualizaTotal();
});