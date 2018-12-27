import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/CustomButtons/Button';

import tableStyle from 'assets/jss/tableStyle';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

function AirgrabTable({ ...props }) {
  const { classes, handleSubmit, account, claims, intl } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.airgrabTableColumnSymbolHeader)}
            </TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.airgrabTableColumnSDescriptionHeader)}
            </TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.airgrabTableColumnWebsiteHeader)}
            </TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.airgrabTableColumnGrabHeader)}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.length > 0 ? (
            claims.map(row => {
              return (
                <TableRow className={classes.tableRowHover} key={row.symbol}>
                  <TableCell className={classes.tableCell}>{row.symbol}</TableCell>
                  <TableCell className={classes.tableCell}>{row.description}</TableCell>
                  <TableCell className={classes.tableCell}>
                    <a href={row.url} target="new">
                      {row.url}
                    </a>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {account && account.balances.find(b => b.code === row.account) ? (
                      <Button onClick={() => handleSubmit(row)} color="rose">
                        <FormattedMessage {...messages.claimTableClaimText} />
                      </Button>
                    ) : (
                      <span>
                        <FormattedMessage {...messages.claimTableClaimUnavailableText} />
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell} colSpan={3}>
                <FormattedMessage {...messages.claimTableNoClaimText} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(AirgrabTable);
