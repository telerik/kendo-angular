import { Injectable } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export interface GridItem {
  time: string;
  amount: string;
  positive: boolean;
  company: string;
  status: string;
  themecolor: string;
  country: string;
  flag: SafeHtml | null;
}

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  private canadaFlag = `<svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6418_12218)">
      <rect
        width="22.5"
        height="12"
        transform="translate(0.75)"
        fill="white"
      />
      <g clip-path="url(#clip1_6418_12218)">
        <path
          d="M0 0H6L6.2475 0.2475H17.7525L18 0H24V12H18L17.7525 11.7525H6.2475L6 12H0V0Z"
          fill="#FF0000"
        />
        <path
          d="M6 0H18V12H6V0ZM12.225 11.075L12.1125 8.9175C12.1109 8.88202 12.1172 8.84662 12.1311 8.81392C12.1449 8.78121 12.1659 8.75203 12.1926 8.72852C12.2192 8.70502 12.2507 8.68778 12.2849 8.67808C12.3191 8.66839 12.355 8.66648 12.39 8.6725L14.5375 9.05L14.2475 8.25C14.2357 8.21817 14.2342 8.18345 14.2432 8.15072C14.2522 8.11799 14.2712 8.08889 14.2975 8.0675L16.65 6.1625L16.12 5.915C16.0842 5.89808 16.0558 5.86868 16.0402 5.83232C16.0245 5.79595 16.0227 5.75512 16.035 5.7175L16.5 4.2875L15.145 4.575C15.1083 4.58265 15.0701 4.57738 15.0368 4.56006C15.0035 4.54275 14.9773 4.51446 14.9625 4.48L14.7 3.8625L13.6425 4.9975C13.6183 5.023 13.5865 5.03998 13.5519 5.04589C13.5172 5.05179 13.4816 5.04631 13.4503 5.03025C13.4191 5.0142 13.3939 4.98844 13.3785 4.95684C13.3631 4.92525 13.3584 4.88951 13.365 4.855L13.875 2.225L13.0575 2.6975C13.0383 2.70875 13.017 2.71594 12.9949 2.71862C12.9728 2.7213 12.9504 2.71942 12.9291 2.71309C12.9078 2.70676 12.888 2.69612 12.8709 2.68183C12.8539 2.66754 12.84 2.6499 12.83 2.63L12 1L11.17 2.63C11.16 2.6499 11.1461 2.66754 11.1291 2.68183C11.112 2.69612 11.0922 2.70676 11.0709 2.71309C11.0496 2.71942 11.0272 2.7213 11.0051 2.71862C10.983 2.71594 10.9617 2.70875 10.9425 2.6975L10.125 2.225L10.635 4.855C10.6416 4.88951 10.6369 4.92525 10.6215 4.95684C10.6061 4.98844 10.5809 5.0142 10.5497 5.03025C10.5184 5.04631 10.4828 5.05179 10.4481 5.04589C10.4135 5.03998 10.3817 5.023 10.3575 4.9975L9.3 3.8625L9.0375 4.48C9.02271 4.51446 8.99646 4.54275 8.9632 4.56006C8.92994 4.57738 8.89171 4.58265 8.855 4.575L7.5 4.2875L7.965 5.7175C7.97732 5.75512 7.97549 5.79595 7.95984 5.83232C7.94418 5.86868 7.9158 5.89808 7.88 5.915L7.35 6.1625L9.7025 8.0675C9.72885 8.08889 9.74784 8.11799 9.7568 8.15072C9.76577 8.18345 9.76427 8.21817 9.7525 8.25L9.4625 9.05L11.61 8.6725C11.645 8.66648 11.6809 8.66839 11.7151 8.67808C11.7493 8.68778 11.7808 8.70502 11.8074 8.72852C11.8341 8.75203 11.8551 8.78121 11.8689 8.81392C11.8828 8.84662 11.8891 8.88202 11.8875 8.9175L11.775 11.075H12.225Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6418_12218">
        <rect
          width="22.5"
          height="12"
          fill="white"
          transform="translate(0.75)"
        />
      </clipPath>
      <clipPath id="clip1_6418_12218">
        <rect width="24" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>`;

  private usaFlag = `<svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6418_12135)">
      <g clip-path="url(#clip1_6418_12135)">
        <path d="M23.55 0H0.75V12H23.55V0Z" fill="#B22234" />
        <path
          d="M0.75 1.38477H23.55H0.75ZM23.55 3.23092H0.75H23.55ZM0.75 5.07707H23.55H0.75ZM23.55 6.92323H0.75H23.55ZM0.75 8.76938H23.55H0.75ZM23.55 10.6155H0.75H23.55Z"
          fill="black"
        />
        <path
          d="M0.75 1.38477H23.55M23.55 3.23092H0.75M0.75 5.07707H23.55M23.55 6.92323H0.75M0.75 8.76938H23.55M23.55 10.6155H0.75"
          stroke="white"
          stroke-width="0.923077"
        />
        <path d="M9.87 0H0.75V6.46154H9.87V0Z" fill="#3C3B6E" />
        <path
          d="M1.51327 0.276611L1.7303 0.944556L1.16211 0.531743H1.86443L1.29624 0.944556L1.51327 0.276611Z"
          fill="white"
        />
        <path
          d="M1.51327 1.56885L1.7303 2.23679L1.16211 1.82398H1.86443L1.29624 2.23679L1.51327 1.56885Z"
          fill="white"
        />
        <path
          d="M1.51327 2.86108L1.7303 3.52903L1.16211 3.11622H1.86443L1.29624 3.52903L1.51327 2.86108Z"
          fill="white"
        />
        <path
          d="M1.51327 4.15356L1.7303 4.82151L1.16211 4.4087H1.86443L1.29624 4.82151L1.51327 4.15356Z"
          fill="white"
        />
        <path
          d="M1.51132 5.44604L1.72834 6.11399L1.16016 5.70118H1.86247L1.29429 6.11399L1.51132 5.44604Z"
          fill="white"
        />
        <path
          d="M2.27108 0.922607L2.48811 1.59055L1.91992 1.17774H2.62224L2.05405 1.59055L2.27108 0.922607Z"
          fill="white"
        />
        <path
          d="M2.27108 2.21484L2.48811 2.88279L1.91992 2.46998H2.62224L2.05405 2.88279L2.27108 2.21484Z"
          fill="white"
        />
        <path
          d="M2.27108 3.50708L2.48811 4.17502L1.91992 3.76221H2.62224L2.05405 4.17502L2.27108 3.50708Z"
          fill="white"
        />
        <path
          d="M2.27108 4.79932L2.48811 5.46726L1.91992 5.05445H2.62224L2.05405 5.46726L2.27108 4.79932Z"
          fill="white"
        />
        <path
          d="M3.0328 0.276611L3.24983 0.944556L2.68164 0.531743H3.38396L2.81577 0.944556L3.0328 0.276611Z"
          fill="white"
        />
        <path
          d="M3.0328 1.56885L3.24983 2.23679L2.68164 1.82398H3.38396L2.81577 2.23679L3.0328 1.56885Z"
          fill="white"
        />
        <path
          d="M3.0328 2.86108L3.24983 3.52903L2.68164 3.11622H3.38396L2.81577 3.52903L3.0328 2.86108Z"
          fill="white"
        />
        <path
          d="M3.0328 4.15356L3.24983 4.82151L2.68164 4.4087H3.38396L2.81577 4.82151L3.0328 4.15356Z"
          fill="white"
        />
        <path
          d="M3.0328 5.44604L3.24983 6.11399L2.68164 5.70118H3.38396L2.81577 6.11399L3.0328 5.44604Z"
          fill="white"
        />
        <path
          d="M3.79061 0.922607L4.00764 1.59055L3.43945 1.17774H4.14177L3.57358 1.59055L3.79061 0.922607Z"
          fill="white"
        />
        <path
          d="M3.79061 2.21484L4.00764 2.88279L3.43945 2.46998H4.14177L3.57358 2.88279L3.79061 2.21484Z"
          fill="white"
        />
        <path
          d="M3.79061 3.50708L4.00764 4.17502L3.43945 3.76221H4.14177L3.57358 4.17502L3.79061 3.50708Z"
          fill="white"
        />
        <path
          d="M3.79061 4.79956L4.00764 5.46751L3.43945 5.05469H4.14177L3.57358 5.46751L3.79061 4.79956Z"
          fill="white"
        />
        <path
          d="M4.55233 0.276611L4.76936 0.944556L4.20117 0.531743H4.90349L4.3353 0.944556L4.55233 0.276611Z"
          fill="white"
        />
        <path
          d="M4.55233 1.56885L4.76936 2.23679L4.20117 1.82398H4.90349L4.3353 2.23679L4.55233 1.56885Z"
          fill="white"
        />
        <path
          d="M4.55233 2.86133L4.76936 3.52927L4.20117 3.11646H4.90349L4.3353 3.52927L4.55233 2.86133Z"
          fill="white"
        />
        <path
          d="M4.55233 4.15381L4.76936 4.82175L4.20117 4.40894H4.90349L4.3353 4.82175L4.55233 4.15381Z"
          fill="white"
        />
        <path
          d="M4.55233 5.4458L4.76936 6.11375L4.20117 5.70093H4.90349L4.3353 6.11375L4.55233 5.4458Z"
          fill="white"
        />
        <path
          d="M5.31405 0.922607L5.53108 1.59055L4.96289 1.17774H5.66521L5.09702 1.59055L5.31405 0.922607Z"
          fill="white"
        />
        <path
          d="M5.31405 2.21484L5.53108 2.88279L4.96289 2.46998H5.66521L5.09702 2.88279L5.31405 2.21484Z"
          fill="white"
        />
        <path
          d="M5.31405 3.50708L5.53108 4.17502L4.96289 3.76221H5.66521L5.09702 4.17502L5.31405 3.50708Z"
          fill="white"
        />
        <path
          d="M5.31405 4.79956L5.53108 5.46751L4.96289 5.05469H5.66521L5.09702 5.46751L5.31405 4.79956Z"
          fill="white"
        />
        <path
          d="M6.06991 0.276855L6.28694 0.9448L5.71875 0.531988H6.42107L5.85288 0.9448L6.06991 0.276855Z"
          fill="white"
        />
        <path
          d="M6.06991 1.56909L6.28694 2.23704L5.71875 1.82422H6.42107L5.85288 2.23704L6.06991 1.56909Z"
          fill="white"
        />
        <path
          d="M6.06991 2.86133L6.28694 3.52927L5.71875 3.11646H6.42107L5.85288 3.52927L6.06991 2.86133Z"
          fill="white"
        />
        <path
          d="M6.06991 4.15356L6.28694 4.82151L5.71875 4.4087H6.42107L5.85288 4.82151L6.06991 4.15356Z"
          fill="white"
        />
        <path
          d="M6.06991 5.44604L6.28694 6.11399L5.71875 5.70118H6.42107L5.85288 6.11399L6.06991 5.44604Z"
          fill="white"
        />
        <path
          d="M6.83163 0.922607L7.04866 1.59055L6.48047 1.17774H7.18279L6.6146 1.59055L6.83163 0.922607Z"
          fill="white"
        />
        <path
          d="M6.83163 2.21484L7.04866 2.88279L6.48047 2.46998H7.18279L6.6146 2.88279L6.83163 2.21484Z"
          fill="white"
        />
        <path
          d="M6.83163 3.50708L7.04866 4.17502L6.48047 3.76221H7.18279L6.6146 4.17502L6.83163 3.50708Z"
          fill="white"
        />
        <path
          d="M6.83163 4.79932L7.04866 5.46726L6.48047 5.05445H7.18279L6.6146 5.46726L6.83163 4.79932Z"
          fill="white"
        />
        <path
          d="M7.58749 0.2771L7.80452 0.945044L7.23633 0.532232H7.93865L7.37046 0.945044L7.58749 0.2771Z"
          fill="white"
        />
        <path
          d="M7.58749 1.56934L7.80452 2.23728L7.23633 1.82447H7.93865L7.37046 2.23728L7.58749 1.56934Z"
          fill="white"
        />
        <path
          d="M7.58749 2.86157L7.80452 3.52952L7.23633 3.1167H7.93865L7.37046 3.52952L7.58749 2.86157Z"
          fill="white"
        />
        <path
          d="M7.58749 4.15381L7.80452 4.82175L7.23633 4.40894H7.93865L7.37046 4.82175L7.58749 4.15381Z"
          fill="white"
        />
        <path
          d="M7.58944 5.44629L7.80647 6.11423L7.23828 5.70142H7.9406L7.37241 6.11423L7.58944 5.44629Z"
          fill="white"
        />
        <path
          d="M8.34921 0.922852L8.56623 1.5908L7.99805 1.17798H8.70037L8.13218 1.5908L8.34921 0.922852Z"
          fill="white"
        />
        <path
          d="M8.34921 2.21509L8.56623 2.88303L7.99805 2.47022H8.70037L8.13218 2.88303L8.34921 2.21509Z"
          fill="white"
        />
        <path
          d="M8.34921 3.50732L8.56623 4.17527L7.99805 3.76246H8.70037L8.13218 4.17527L8.34921 3.50732Z"
          fill="white"
        />
        <path
          d="M8.34921 4.7998L8.56623 5.46775L7.99805 5.05494H8.70037L8.13218 5.46775L8.34921 4.7998Z"
          fill="white"
        />
        <path
          d="M9.11483 0.276855L9.33186 0.9448L8.76367 0.531988H9.46599L8.8978 0.9448L9.11483 0.276855Z"
          fill="white"
        />
        <path
          d="M9.11483 1.56934L9.33186 2.23728L8.76367 1.82447H9.46599L8.8978 2.23728L9.11483 1.56934Z"
          fill="white"
        />
        <path
          d="M9.11483 2.86133L9.33186 3.52927L8.76367 3.11646H9.46599L8.8978 3.52927L9.11483 2.86133Z"
          fill="white"
        />
        <path
          d="M9.11483 4.15381L9.33186 4.82175L8.76367 4.40894H9.46599L8.8978 4.82175L9.11483 4.15381Z"
          fill="white"
        />
        <path
          d="M9.11288 5.44629L9.32991 6.11423L8.76172 5.70142H9.46404L8.89585 6.11423L9.11288 5.44629Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6418_12135">
        <rect
          width="22.5"
          height="12"
          fill="white"
          transform="translate(0.75)"
        />
      </clipPath>
      <clipPath id="clip1_6418_12135">
        <rect
          width="22.8"
          height="12"
          fill="white"
          transform="translate(0.75)"
        />
      </clipPath>
    </defs>
  </svg>`;

  private germanyFlag = `<svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6418_12224)">
      <g clip-path="url(#clip1_6418_12224)">
        <path d="M23 0H0.5V12H23V0Z" fill="black" />
        <path d="M23 4H0.5V12H23V4Z" fill="#DD0000" />
        <path d="M23 8H0.5V12H23V8Z" fill="#FFCE00" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6418_12224">
        <rect
          width="22.5"
          height="12"
          fill="white"
          transform="translate(0.75)"
        />
      </clipPath>
      <clipPath id="clip1_6418_12224">
        <rect
          width="22.5"
          height="12"
          fill="white"
          transform="translate(0.5)"
        />
      </clipPath>
    </defs>
  </svg>`;

  private norwayFlag = `<svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6418_12231)">
      <rect
        width="22.5"
        height="12"
        transform="translate(0.75)"
        fill="white"
      />
      <g clip-path="url(#clip1_6418_12231)">
        <path d="M23.25 -2.25H0.75V14.1136H23.25V-2.25Z" fill="#EF2B2D" />
        <path
          d="M10.9776 -2.25H6.88672V14.1136H10.9776V-2.25Z"
          fill="white"
        />
        <path d="M23.25 3.88647H0.75V7.97738H23.25V3.88647Z" fill="white" />
        <path
          d="M9.95366 -2.25H7.9082V14.1136H9.95366V-2.25Z"
          fill="#002868"
        />
        <path d="M23.25 4.90918H0.75V6.95463H23.25V4.90918Z" fill="#002868" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6418_12231">
        <rect
          width="22.5"
          height="12"
          fill="white"
          transform="translate(0.75)"
        />
      </clipPath>
      <clipPath id="clip1_6418_12231">
        <rect
          width="22.5"
          height="16.3636"
          fill="white"
          transform="translate(0.75 -2.25)"
        />
      </clipPath>
    </defs>
  </svg>`;

  private swedenFlag = `<svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6418_12240)">
      <rect
        width="22.5"
        height="12"
        transform="translate(0.75)"
        fill="white"
      />
      <g clip-path="url(#clip1_6418_12240)">
        <path d="M0.75 -0.75H23.25V13.3125H0.75V-0.75Z" fill="#006AA7" />
        <path
          d="M0.75 4.875H7.78125V-0.75H10.5938V4.875H23.25V7.6875H10.5938V13.3125H7.78125V7.6875H0.75V4.875Z"
          fill="#FECC00"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6418_12240">
        <rect
          width="22.5"
          height="12"
          fill="white"
          transform="translate(0.75)"
        />
      </clipPath>
      <clipPath id="clip1_6418_12240">
        <rect
          width="22.5"
          height="14.0625"
          fill="white"
          transform="translate(0.75 -0.75)"
        />
      </clipPath>
    </defs>
  </svg>`;

  private ukFlag = `<svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_6418_12247)">
      <mask
        id="mask0_6418_12247"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="12"
      >
        <path d="M0 0V12H24V0H0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_6418_12247)">
        <path d="M0 0V12H24V0H0Z" fill="#012169" />
        <path d="M0 0L24 12L0 0ZM24 0L0 12L24 0Z" fill="black" />
        <path d="M0 0L24 12M24 0L0 12" stroke="white" strokeWidth="2.4" />
        <mask
          id="mask1_6418_12247"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="12"
        >
          <path
            d="M12 6H24V12L12 6ZM12 6V12H0L12 6ZM12 6H0V0L12 6ZM12 6V0H24L12 6Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_6418_12247)">
          <path d="M0 0L24 12L0 0ZM24 0L0 12L24 0Z" fill="black" />
          <path d="M0 0L24 12M24 0L0 12" stroke="#C8102E" strokeWidth="1.6" />
        </g>
        <path d="M12 0V12V0ZM0 6H24H0Z" fill="black" />
        <path d="M12 0V12M0 6H24" stroke="white" strokeWidth="4" />
        <path d="M12 0V12V0ZM0 6H24H0Z" fill="black" />
        <path d="M12 0V12M0 6H24" stroke="#C8102E" strokeWidth="2.4" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6418_12247">
        <rect width="24" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>`;

  private gridData: GridItem[] = [
    {
      time: "7:15 AM",
      amount: "+$789.32",
      positive: true,
      company: "Zentronix Ltd",
      status: "Approved",
      themecolor: "success",
      country: "USA",
      flag: this.usaFlag,
    },
    {
      time: "6:45 AM",
      amount: "-$324.55",
      positive: false,
      company: "NovaCore Industries",
      status: "Declined",
      themecolor: "error",
      country: "Germany",
      flag: this.germanyFlag,
    },
    {
      time: "6:10 AM",
      amount: "-$1,512.98",
      positive: false,
      company: "SkyMettle Solutions",
      status: "Pending",
      themecolor: "warning",
      country: "Norway",
      flag: this.norwayFlag,
    },
    {
      time: "5:55 AM",
      amount: "+$452.11",
      positive: true,
      company: "Verexis Corp",
      status: "Approved",
      themecolor: "success",
      country: "Canada",
      flag: this.canadaFlag,
    },
    {
      time: "5:22 AM",
      amount: "-$299.99",
      positive: false,
      company: "QuantumEdge Systems",
      status: "Declined",
      themecolor: "error",
      country: "UK",
      flag: this.ukFlag,
    },
    {
      time: "4:45 AM",
      amount: "+$642.33",
      positive: true,
      company: "HyperNex Technologies",
      status: "Approved",
      themecolor: "success",
      country: "Sweden",
      flag: this.swedenFlag,
    },
    {
      time: "4:10 AM",
      amount: "-$234.00",
      positive: false,
      company: "NebulaForge Ltd",
      status: "Pending",
      themecolor: "warning",
      country: "Germany",
      flag: this.germanyFlag,
    },
    {
      time: "3:50 AM",
      amount: "-$3,200.75",
      positive: false,
      company: "TitanWave Industries",
      status: "Approved",
      themecolor: "success",
      country: "UK",
      flag: this.ukFlag,
    },
    {
      time: "3:20 AM",
      amount: "+$888.00",
      positive: true,
      company: "Vortexium Inc",
      status: "Approved",
      themecolor: "success",
      country: "USA",
      flag: this.usaFlag,
    },
    {
      time: "3:00 AM",
      amount: "-$1,100.45",
      positive: false,
      company: "AetherWorks Solutions",
      status: "Declined",
      themecolor: "error",
      country: "Norway",
      flag: this.norwayFlag,
    },
    {
      time: "2:45 AM",
      amount: "+$275.99",
      positive: true,
      company: "OmniSage Technologies",
      status: "Approved",
      themecolor: "success",
      country: "Sweden",
      flag: this.swedenFlag,
    },
    {
      time: "2:20 AM",
      amount: "-$900.88",
      positive: false,
      company: "EcliptoSys Solutions",
      status: "Pending",
      themecolor: "warning",
      country: "USA",
      flag: this.usaFlag,
    },
    {
      time: "2:00 AM",
      amount: "-$5,555.66",
      positive: false,
      company: "TechHorizon Ltd",
      status: "Approved",
      themecolor: "success",
      country: "Germany",
      flag: this.germanyFlag,
    },
    {
      time: "1:40 AM",
      amount: "+$1,320.75",
      positive: true,
      company: "InnovaX Dynamics",
      status: "Approved",
      themecolor: "success",
      country: "Canada",
      flag: this.canadaFlag,
    },
    {
      time: "1:15 AM",
      amount: "-$275.30",
      positive: false,
      company: "QuantumSpark Tech",
      status: "Declined",
      themecolor: "error",
      country: "Norway",
      flag: this.norwayFlag,
    },
    {
      time: "1:00 AM",
      amount: "-$4,788.22",
      positive: false,
      company: "CyberNova Corp",
      status: "Pending",
      themecolor: "warning",
      country: "Canada",
      flag: this.canadaFlag,
    },
    {
      time: "12:45 AM",
      amount: "+$625.44",
      positive: true,
      company: "ZenithByte Technologies",
      status: "Approved",
      themecolor: "success",
      country: "UK",
      flag: this.ukFlag,
    },
    {
      time: "12:20 AM",
      amount: "-$1,999.99",
      positive: false,
      company: "StratosNet Inc",
      status: "Declined",
      themecolor: "error",
      country: "Sweden",
      flag: this.swedenFlag,
    },
    {
      time: "12:05 AM",
      amount: "+$725.10",
      positive: true,
      company: "InfinityGrid Systems",
      status: "Approved",
      themecolor: "success",
      country: "Canada",
      flag: this.canadaFlag,
    },
    {
      time: "11:55 PM",
      amount: "-$430.00",
      positive: false,
      company: "OmicronX Solutions",
      status: "Pending",
      themecolor: "warning",
      country: "USA",
      flag: this.usaFlag,
    },
    {
      time: "11:30 PM",
      amount: "+$1,555.75",
      positive: true,
      company: "MetaPulse Dynamics",
      status: "Approved",
      themecolor: "success",
      country: "USA",
      flag: this.usaFlag,
    },
    {
      time: "11:10 PM",
      amount: "-$325.88",
      positive: false,
      company: "HeliosSync Ltd",
      status: "Declined",
      themecolor: "error",
      country: "Germany",
      flag: this.germanyFlag,
    },
    {
      time: "10:55 PM",
      amount: "+$455.20",
      positive: true,
      company: "Xenovate Corp",
      status: "Approved",
      themecolor: "success",
      country: "Norway",
      flag: this.norwayFlag,
    },
    {
      time: "10:40 PM",
      amount: "-$875.30",
      positive: false,
      company: "Lumosys Technologies",
      status: "Pending",
      themecolor: "warning",
      country: "UK",
      flag: this.ukFlag,
    },
    {
      time: "10:20 PM",
      amount: "+$912.99",
      positive: true,
      company: "StellarNode Inc",
      status: "Approved",
      themecolor: "success",
      country: "Norway",
      flag: this.norwayFlag,
    },
    {
      time: "10:00 PM",
      amount: "-$599.99",
      positive: false,
      company: "EternaTech Ltd",
      status: "Declined",
      themecolor: "error",
      country: "Sweden",
      flag: this.swedenFlag,
    },
    {
      time: "9:45 PM",
      amount: "-$2,125.45",
      positive: false,
      company: "OrionSphere Systems",
      status: "Pending",
      themecolor: "warning",
      country: "Canada",
      flag: this.canadaFlag,
    },
    {
      time: "9:30 PM",
      amount: "+$2,330.55",
      positive: true,
      company: "OptimusNexus Corp",
      status: "Approved",
      themecolor: "success",
      country: "UK",
      flag: this.ukFlag,
    },
    {
      time: "9:10 PM",
      amount: "-$675.88",
      positive: false,
      company: "VertexLynx Solutions",
      status: "Declined",
      themecolor: "error",
      country: "Germany",
      flag: this.germanyFlag,
    },
    {
      time: "11:25 PM",
      amount: "-$1675.88",
      positive: false,
      company: "Toto Solutions",
      status: "Declined",
      themecolor: "error",
      country: "Canada",
      flag: this.canadaFlag,
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.initializeFlags();
  }

  private initializeFlags(): void {
    this.gridData.forEach(item => {
      switch (item.country) {
        case 'USA':
          item.flag = this.sanitizer.bypassSecurityTrustHtml(this.usaFlag);
          break;
        case 'Germany':
          item.flag = this.sanitizer.bypassSecurityTrustHtml(this.germanyFlag);
          break;
        case 'Norway':
          item.flag = this.sanitizer.bypassSecurityTrustHtml(this.norwayFlag);
          break;
        case 'Canada':
          item.flag = this.sanitizer.bypassSecurityTrustHtml(this.canadaFlag);
          break;
        case 'UK':
          item.flag = this.sanitizer.bypassSecurityTrustHtml(this.ukFlag);
          break;
        case 'Sweden':
          item.flag = this.sanitizer.bypassSecurityTrustHtml(this.swedenFlag);
          break;
        default:
          item.flag = this.sanitizer.bypassSecurityTrustHtml('');
      }
    });
  }

  getGridData(): GridItem[] {
    return this.gridData;
  }

  getPagedData(skip: number, take: number): GridItem[] {
    return this.gridData.slice(skip, skip + take);
  }

  getTotal(): number {
    return this.gridData.length;
  }
}
