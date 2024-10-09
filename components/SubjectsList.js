import React from 'react'
import { List } from 'react-native-paper'

function SubjectsList() {
  return (
    <List.Section>
    <List.Subheader>Subjects</List.Subheader>
    <List.Item title="English" left={() => <List.Icon icon="folder" />} />
    <List.Item title="AP Pre Calculus" left={() => <List.Icon icon="folder" />} />
    <List.Item title="US History" left={() => <List.Icon icon="folder" />} />
    <List.Item title="AP Chemistry" left={() => <List.Icon icon="folder" />} />
  </List.Section>
  )
}

export default SubjectsList