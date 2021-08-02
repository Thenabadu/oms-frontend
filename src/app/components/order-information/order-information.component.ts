import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OrderInfo} from '../../model/orderInfo';
import {MatPaginator} from '@angular/material/paginator';
import {UploadFileService} from '../../services/upload-file.service';
import {MatSort} from '@angular/material/sort';

@Component({
    selector: 'app-order-information',
    templateUrl: './order-information.component.html',
    styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['orderId', 'region', 'country', 'itemType', 'salesChannel', 'orderPriority', 'orderDate', 'shipDate', 'noOfUnits', 'unitPrice', 'unitCost', 'totalRevenue', 'totalCost', 'totalProfit', 'nric'];
    @ViewChild(MatPaginator)
    paginator: MatPaginator;
    @ViewChild(MatSort)
    sort: MatSort;

    pageSizeOptions = [25, 50, 100];
    pageIndex = 0;
    pageSize = this.pageSizeOptions[0];
    length = 0;
    sortCol = 'orderId';
    sortDir = 'asc';

    dataSource: MatTableDataSource<OrderInfo> = new MatTableDataSource<OrderInfo>();

    constructor(private OrderServie: UploadFileService) {
    }

    ngOnInit(): void {
        this.pageIndex = 0;
        this.changePage({pageIndex: this.pageIndex, pageSize: this.pageSize}, {active: this.sortCol, direction: this.sortDir});
    }

    ngAfterViewInit(): void {
    }

    changePage(eventPaginator, eventSort): void {
        console.log(eventPaginator);
        console.log(eventSort);
        this.pageSize = eventPaginator.pageSize;
        this.pageIndex = eventPaginator.pageIndex;
        this.sortCol = eventSort.active;
        this.sortDir = eventSort.direction;
        this.OrderServie.getOrderInfo(this.pageIndex, this.pageSize, this.sortCol, this.sortDir).subscribe(value => {
            console.log(value);
            this.length = value.totalCount;
            this.dataSource.data = value.orderInfos;
        }, error => {
            console.log(error);
        });
    }
}



