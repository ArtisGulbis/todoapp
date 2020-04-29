import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import './app.scss';

import { addToList, check, remove } from './redux/todo/todo.actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			description: e.target.value
		});
	};

	handleSubmit = (e) => {
		const { newItem } = this.props;
		e.preventDefault();
		newItem({ description: this.state.description, checked: false, id: uniqid() });

		const fields = document.querySelectorAll('input');
		fields.forEach((el) => {
			el.value = '';
		});
	};

	handleEvent = (e) => {
		const { check, remove } = this.props;
		console.log(e.target.dataset.type);
		switch (e.target.dataset.type) {
			case 'check':
				check(e.target.dataset.id);
				break;
			case 'remove':
				remove(e.target.dataset.id);
				break;
			default:
				return;
		}
	};

	generateTodoCard = (list) => {
		return list.map(({ description, id, checked }) => {
			switch (checked) {
				case true:
					return (
						<li key={id} onClick={(e) => this.handleEvent(e)}>
							<h3>{description}</h3>
							<p data-type="check" data-id={id}>
								done
							</p>
							<p data-type="remove">remove</p>
						</li>
					);

				case false:
					return (
						<li key={id} onClick={(e) => this.handleEvent(e)}>
							<h3>{description}</h3>
							<p data-type="check" data-id={id}>
								not done
							</p>
							<p data-type="remove">remove</p>
						</li>
					);

				default:
					return '';
			}
		});
	};

	render() {
		const { list: { list } } = this.props;

		return (
			<div>
				<header>
					<h1>Create your todo list</h1>
				</header>
				<main>
					<form>
						<input type="text" placeholder="Enter your task here" onChange={this.handleChange} />
						<button type="submit" onClick={(e) => this.handleSubmit(e)}>
							Add
						</button>
					</form>
					<article>
						<header>
							<h2>Your list:</h2>
						</header>
						<ul>{this.generateTodoCard(list)}</ul>
					</article>
				</main>
			</div>
		);
	}
}

const mapStateToProps = ({ completeList: list }) => ({
	list
});

const mapDispatchToProps = {
	newItem: addToList,
	check: check,
	remove: remove
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
