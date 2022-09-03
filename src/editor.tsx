import {
  ControlElement,
  getData,
  getSchema,
  getUiSchema,
  JsonFormsStore,
} from "@jsonforms/core";
import { ThemedTreeWithDetail } from "@jsonforms/material-tree-renderer";
import { JsonFormsReduxContext } from "@jsonforms/react";
import * as React from "react";
import { Provider } from "react-redux";
import EditorBar from "./app-bar/EditorBar";

interface EditorParameter {
  store: JsonFormsStore;
  filterPredicate: any;
  labelProviders: any;
  imageProvider: any;
}

const Editor = ({
  store,
  filterPredicate,
  labelProviders,
  imageProvider,
}: EditorParameter) => {
  const Ctx = JsonFormsReduxContext as any;

  return (
    <Provider store={store}>
      <Ctx>
        <React.Fragment>
          <EditorBar
            schema={getSchema(store.getState())}
            rootData={getData(store.getState())}
          />
          <ThemedTreeWithDetail
            filterPredicate={filterPredicate}
            labelProviders={labelProviders}
            imageProvider={imageProvider}
            schema={getSchema(store.getState())}
            uischema={getUiSchema(store.getState()) as ControlElement}
          />
        </React.Fragment>
      </Ctx>
    </Provider>
  );
};

export default Editor;
