import PropTypes from "prop-types"
import { StandardListItem, CustomListItem } from "@ui5/webcomponents-react"

import styles from "./styles.module.scss"

const ListItem = ({ title, children }) =>
  title ? (
    <StandardListItem
      className={styles.li}
      additionalText={children}
      additionalTextState="Information"
    >
      <span className={styles.liTitle}>{title}:</span>
    </StandardListItem>
  ) : (
    <CustomListItem className={styles.liCustom}>{children}</CustomListItem>
  )

ListItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default ListItem
