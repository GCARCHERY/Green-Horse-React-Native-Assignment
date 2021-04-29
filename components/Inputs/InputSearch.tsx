import * as React from 'react';
import { Dimensions, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { TabBarStyle } from '../../constants/Colors/DefaultStyle';
import TabBarIcon from '../../navigation/NavigationComponents/Other/TabBarIcon';
import { View } from '../Themed';


interface Props {
    onSubmitSearch?: Function,
    emptySearch?: Function
}

class InputSearch extends React.Component<Props> {
    state={
        loading: false,
        search: ''
    }

    render() {
        return (
            <View style={styles.search_bar}>
                <TextInput 
                    style={styles.search_input}
                    placeholder='Search'
                    placeholderTextColor={TabBarStyle.activeTint}
                    onChangeText={(search:string) => {
                        this.setState({
                            search
                        })
                        if(search.length === 0) {
                            if(this.props.emptySearch) {
                                this.props.emptySearch()
                            }
                        }
                    }}
                    value={this.state.search}
                />
                <TouchableOpacity style={styles.search_icon} onPress={() => {
                    if(this.props.onSubmitSearch) {
                        this.props.onSubmitSearch(this.state.search)
                    }
                }}>
                    <TabBarIcon color={TabBarStyle.inactiveTint} name='search1' isNotTabBar={true}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default InputSearch;

const styles = StyleSheet.create({
    search_bar: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.07,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    search_input: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.07,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10,
        color: TabBarStyle.activeTint,
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: TabBarStyle.activeTint
    },
    search_icon: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: TabBarStyle.activeTint,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});