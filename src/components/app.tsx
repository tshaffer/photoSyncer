import {
  remote,
} from 'electron';

import * as React from 'react';
import * as path from "path";
import * as dateformat from 'dateformat';
import { cloneDeep, isNil } from 'lodash';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  rootDiv: {
    width: '100%',
    height: '100%'
  }
};

export default class App extends React.Component<any, object> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <MuiThemeProvider>
        <div style={styles.rootDiv}>
          <p>Pizza</p>
        </div>
      </MuiThemeProvider>
    );
  }
}
