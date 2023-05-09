import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
          ${model
            .lista()
            .map((item) => {
            return `
                <tr>
                    <td>${this.formatarData(item.data)}</td>
                    <td>${item.quantidade}</td>
                    <td>${item.valor}</td>
                    <td>${item.volume}</td>
                </tr>
            `;
        })
            .join("")}
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
