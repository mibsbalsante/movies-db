import PropTypes from "prop-types"
import { Text } from "@ui5/webcomponents-react"

import styles from "./styles.module.scss"

const ListItem = ({ title, children }) => (
  <li>
    <Text className={styles.li}>
      <span className={styles.liTitle}>{title}:</span> {children}
    </Text>
  </li>
)

ListItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default ListItem
