import { Component } from '@angular/core';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import {
    DropAction,
    DropPosition,
    KENDO_TREEVIEW,
    TreeItemDropEvent,
    TreeItemLookup,
} from '@progress/kendo-angular-treeview';
import {
    cancelIcon,
    codeIcon,
    filePdfIcon,
    folderIcon,
    imageIcon,
    insertBottomIcon,
    insertMiddleIcon,
    insertTopIcon,
    plusIcon,
    SVGIcon,
} from '@progress/kendo-svg-icons';
import { dragAndDropData, treeViewData } from '../../data/tree-data';
import { TreeItem } from '../../models/tree-item';

const isOfType = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);
const isFile = (name: string) => name.split('.').length > 1;

@Component({
    selector: 'app-treeview',
    imports: [KENDO_TREEVIEW, KENDO_ICONS],
    templateUrl: './treeview.component.html',
    styleUrl: './treeview.component.css',
})
export class TreeviewComponent {
    public data: TreeItem[] = treeViewData;
    public treeData: TreeItem[] = dragAndDropData;
    public expandedKeys: any[] = ['0', '1'];
    public checkedKeys: any[] = ['0_1'];
    public plusIcon: SVGIcon = plusIcon;
    public insertTopIcon: SVGIcon = insertTopIcon;
    public insertBottomIcon: SVGIcon = insertBottomIcon;
    public insertMiddleIcon: SVGIcon = insertMiddleIcon;
    public pdfFileIcon: SVGIcon = filePdfIcon;
    public folderIcon: SVGIcon = folderIcon;
    public codeIcon: SVGIcon = codeIcon;
    public imageIcon: SVGIcon = imageIcon;
    public cancelIcon: SVGIcon = cancelIcon;

    public getIcon({ text }: TreeItem): SVGIcon {
        if (isOfType(text, 'pdf')) {
            return this.pdfFileIcon;
        } else if (isOfType(text, 'html')) {
            return this.codeIcon;
        } else if (isOfType(text, 'jpg|png')) {
            return this.imageIcon;
        } else if (!isFile(text)) {
            return this.folderIcon;
        } else {
            return this.folderIcon;
        }
    }

    public getDragStatus(action: DropAction, destinationItem: TreeItemLookup): SVGIcon {
        if (destinationItem && action === DropAction.Add && isFile(destinationItem.item.dataItem.text)) {
            return this.cancelIcon;
        }

        switch (action) {
            case DropAction.Add:
                return this.plusIcon;
            case DropAction.InsertTop:
                return this.insertTopIcon;
            case DropAction.InsertBottom:
                return this.insertBottomIcon;
            case DropAction.InsertMiddle:
                return this.insertMiddleIcon;
            case DropAction.Invalid:
            default:
                return this.cancelIcon;
        }
    }

    public handleDrop(event: TreeItemDropEvent): void {
        // prevent drop if attempting to add to file
        if (isFile(event.destinationItem.item.dataItem.text) && event.dropPosition === DropPosition.Over) {
            event.setValid(false);
        }
    }
}
