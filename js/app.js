(() => {

    const $datos = document.getElementById("datos");

    $datos.addEventListener("click", (e) => {

        async function getData() {

            const $filas = document.getElementById("filas");

            try {

                let res = await fetch("https://jsonplaceholder.typicode.com/users");
                let json = await res.json();

                if (!res.ok) throw {
                    status: res.status,
                    statusText: res.statusText
                }

                json.forEach(el => {
                    $filas.innerHTML += `
                        <tr>
                            <td>${el.name}</td>
                            <td>${el.email}</td>
                            <td>${el.phone}</td>
                        </tr>
                    `;
                })

                $datos.disabled = true;

            } catch (err) {

                let message = err.statusText || "Ocurrio un error";
                $filas.innerHTML = `
                    <tr>
                        <td colspan="3">Error ${err.status}: ${message}</td>
                    </tr>
                `;

            }

        }

        getData();

    })

})();