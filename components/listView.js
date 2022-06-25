import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';

const ListView = (props)=>{

                    const styles = StyleSheet.create({
                        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
                        head: { height: 40, backgroundColor: '#f1f8ff' },
                        text: { margin: 6 }
                    });

                    const [tableHead, setTableHead] = React.useState(['Id', 'postId', 'Name', 'Email','Body']);
                    const [tableData,setTableData] = React.useState(
                                    [
                                        ['1', '2', '3', '4'],
                                        ['a', 'b', 'c', 'd'],
                                        ['1', '2', '3', '456\n789'],
                                        ['a', 'b', 'c', 'd']
                                    ]
                    )

                return (
                        <>
                             <View style={styles.container}>
                             <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                 <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                                    {
                                        props.ourData.map((value)=>{
                                                <Row data={["value.data","value.data","value.data","value.data","value.data"]} style={styles.head} textStyle={styles.text}/>
                                        })
                                    }
                                 
                                 
                            </Table>
                            </View>
                        </>
                )



}
export default ListView;