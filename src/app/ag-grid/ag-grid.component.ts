import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
 import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})

export class AgGridComponent  {

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  columnDefs: ColDef[] = [
     { field: 'athlete', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'country', sortable: true, filter: true },
    { field: 'year', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'sport', sortable: true, filter: true },
    { field: 'gold', sortable: true, filter: true },
    { field: 'silver', sortable: true, filter: true },
    { field: 'bronze', sortable: true, filter: true },
];
  rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json');
    console.log(this.rowData);
  }


    getSelectedRows(): void {
          const selectedNodes = this.agGrid.api.getSelectedNodes();
         const selectedData = selectedNodes.map(node => node.data);
          const selectedDataStringPresentation = selectedData.map(node => `${node.athlete} ${node.country}`).join(', ');

          alert(`Selected nodes: ${selectedDataStringPresentation}`);
       }


}
