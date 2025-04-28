import { Component } from "@angular/core";
import { KENDO_EDITOR } from "@progress/kendo-angular-editor";
import { KENDO_TOOLBAR } from "@progress/kendo-angular-toolbar";

@Component({
    selector: "app-editor",
    imports: [KENDO_EDITOR, KENDO_TOOLBAR],
    templateUrl: "./editor.component.html",
    styleUrl: "./editor.component.css",
})
export class EditorComponent {
    public value = `
    <div style="text-align: center;">
        <img src="assets/kendoka.png" alt="Angular Kendoka" title="Kendo Angular" width="63" height="100"/>
    </div>
    <p>
      The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
      In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
      The widget <strong>outputs identical HTML</strong> across all major browsers, follows
      accessibility standards, and provides API for content manipulation.
  </p>
  <p>Features include:</p>
  <ul>
      <li>Text formatting</li>
      <li>Bulleted and numbered lists</li>
      <li>Hyperlinks</li>
      <li>Cross-browser support</li>
      <li>Identical HTML output across browsers</li>
  </ul>
      <table style="width: 100%; height: 100%">
    <thead>
        <tr>
            <th>Library</th>
            <th>Description</th>
            <th>Features</th>
            <th>Documentation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kendo UI for Angular</td>
            <td>Native Angular UI components, built from the ground up for Angular.</td>
            <td>
                <ul>
                    <li>Rich features</li>
                    <li>High performance</li>
                    <li>Seamless integration</li>
                </ul>
            </td>
            <td>
                <a href="https://www.telerik.com/kendo-angular-ui/components/" target="_blank"
                    >Kendo UI for Angular Documentation</a
                >
            </td>
        </tr>
        <tr>
            <td>Kendo UI for React</td>
            <td>Professional UI components built for React.</td>
            <td>
                <ul>
                    <li>Performance optimized</li>
                    <li>Ease of use</li>
                    <li>Accessibility</li>
                </ul>
            </td>
            <td>
                <a href="https://www.telerik.com/kendo-react-ui/components/" target="_blank"
                    >KendoReact Documentation</a
                >
            </td>
        </tr>
        <tr>
            <td>Kendo UI for Vue</td>
            <td>Native UI components for Vue.js applications.</td>
            <td>
                <ul>
                    <li>110+ Vue Components</li>
                    <li>Fully customizable</li>
                    <li>Modular</li>
                </ul>
            </td>
            <td>
                <a href="https://www.telerik.com/kendo-vue-ui/components/" target="_blank"
                    >Kendo UI for Vue Documentation</a
                >
            </td>
        </tr>
        <tr>
            <td>Kendo UI for jQuery</td>
            <td>A comprehensive UI component library for jQuery.</td>
            <td>
                <ul>
                    <li>Widgets</li>
                    <li>Data management</li>
                    <li>Layouts</li>
                </ul>
            </td>
            <td><a href="https://docs.telerik.com/kendo-ui/introduction" target="_blank">Kendo UI for jQuery Documentation</a></td>
        </tr>
    </tbody>
    </table>
`;
}
