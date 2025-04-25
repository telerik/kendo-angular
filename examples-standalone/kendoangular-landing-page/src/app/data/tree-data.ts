import { TreeItem } from '../models/tree-item';

export const dropdowntreeData: TreeItem[] = [
    {
        id: 1,
        text: 'Furniture',
        items: [
            { id: 2, text: 'Tables & Chairs' },
            { id: 3, text: 'Sofas' },
            { id: 4, text: 'Occasional Furniture' },
        ],
    },
];

export const treeViewData: TreeItem[] = [
    {
        id: 1,
        text: 'Furniture',
        items: [
            { id: 2, text: 'Tables & Chairs' },
            { id: 3, text: 'Sofas' },
            { id: 4, text: 'Occasional Furniture' },
        ],
    },
    {
        id: 5,
        text: 'Decor',
        items: [
            { id: 6, text: 'Bed Linen' },
            { id: 7, text: 'Curtains & Blinds' },
            { id: 8, text: 'Carpets' },
        ],
    },
];

export const dragAndDropData: TreeItem[] = [
    {
        id: 1,
        text: 'My Documents',
        items: [
            {
                id: 2,
                text: 'Kendo UI Project',
                items: [
                    { id: 3, text: 'about.html' },
                    { id: 4, text: 'index.html' },
                    { id: 5, text: 'logo.png' },
                ],
            },
            {
                id: 6,
                text: 'New Web Site',
                items: [
                    { id: 7, text: 'mockup.jpg' },
                    { id: 8, text: 'Research.pdf' },
                ],
            },
            {
                id: 9,
                text: 'Reports',
                items: [
                    { id: 10, text: 'February.pdf' },
                    { id: 11, text: 'March.pdf' },
                    { id: 12, text: 'April.pdf' },
                ],
            },
        ],
    },
];
