function inyectFooter(){
    let footer = `
    <footer class="footerDesign clgreyl2 clborder">
        <div class="footerContainerOne">

            <!--Licencia-->
            <section class="licencia_resaltada">
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                    <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
                </a><br>
                <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Recurso didáctico digital: Unidad I. La empresa y su entorno</span><br>
                by 
                <a xmlns:cc="http://creativecommons.org/ns#" href="https://luisenriquechavarriavazquez.github.io/RDD_Unidad_1/unidad1.html" property="cc:attributionName" rel="cc:attributionURL">
                    Josefina Hernández Jaime, Eduardo Rodríguez Flores & Yasmín Ivette Jiménez Galán
                </a><br>
                is licensed under a 
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                    Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
                </a>.<br>
                Based on a work at 
                <a xmlns:dct="http://purl.org/dc/terms/" href="https://luisenriquechavarriavazquez.github.io/RDD_Unidad_1/unidad1.html" rel="dct:source">
                    https://luisenriquechavarriavazquez.github.io/RDD_Unidad_1/unidad1.html
                </a>.<br>
                Permissions beyond the scope of this license may be available at 
                <a xmlns:cc="http://creativecommons.org/ns#" href="https://luisenriquechavarriavazquez.github.io/RDD_Unidad_1/unidad1.html" rel="cc:morePermissions">https://luisenriquechavarriavazquez.github.io/RDD_Unidad_1/unidad1.html</a>.
            </section>
            <section class="clgreyl1 border1 shadow2 tabFechaElaboracion clbktx">
                Fecha de elaboración: Mayo del 2023
            </section>
        </div>
        <div class="footerContainerTwo">
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text' style="z-index: 0;" href='manual.html'>Manual<i
            class="material-icons right">help</i></a>
        <a class='btn waves-effect waves-light border1 clgreyl4 black-text' style="z-index: 0;" href='contacto.html'>Contacto<i
            class="material-icons right">alternate_email</i></a>
        </div>
    </footer>
    `;
    let footerListener = document.getElementById('footerListener');
    footerListener.innerHTML = footer;
}

inyectFooter();