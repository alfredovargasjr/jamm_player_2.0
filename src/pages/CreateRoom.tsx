import { request } from 'graphql-request';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Jumbotron,
  Label,
  Row,
} from 'reactstrap';
import Loading from '../components/Loading';
import spotifyAPIServices from '../services/spotifyAPIServices';
import { AnyARecord } from 'dns';

interface CreateRoomState {
  accessToken: string;
  descriptionInput: InputForm;
  isLoading: boolean;
  nameInput: InputForm;
  tokenType: string;
}

interface InputForm {
  errText: string;
  isValid: boolean;
  name: string;
  value: string;
}

interface Hash_Args {
  access_token: string;
  expires_in: number;
  state: string;
  token_type: string;
}

class CreateRoom extends React.Component<any, CreateRoomState> {
  constructor(props: any) {
    super(props);
    this.state = {
      accessToken: '',
      descriptionInput: {
        errText: 'Must enter a room name.',
        isValid: true,
        name: 'descriptionInput',
        value: '',
      },
      isLoading: false,
      nameInput: {
        errText: 'Must enter a room description.',
        isValid: true,
        name: 'nameInput',
        value: '',
      },
      tokenType: '',
    };
  }

  public parseHashBangArgs() {
    const aURL = window.location.href;
    const vars: any = {};
    const hashes = aURL.slice(aURL.indexOf('#') + 1).split('&');
    // tslint:disable-next-line:forin
    for (const item in hashes) {
      const hash = hashes[item].split('=');
      if (hash.length > 1) {
        vars[hash[0]] = hash[1];
      } else {
        vars[hash[0]] = null;
      }
    }
    return vars;
  }

  public componentDidMount() {
    const hashArgs: Hash_Args = this.parseHashBangArgs();
    this.setState({ accessToken: hashArgs.access_token, tokenType: hashArgs.token_type });
  }

  public createRoom() {
    console.log(this.state.nameInput.value, this.state.descriptionInput.value);
  }

  public isValidInput(formName: string): boolean {
    switch (formName) {
      case this.state.nameInput.name:
        const nameInput = { ...this.state.nameInput };
        nameInput.isValid = nameInput.value.length > 0;
        this.setState({ nameInput });
        return nameInput.isValid;
      case this.state.descriptionInput.name:
        const descriptionInput = { ...this.state.descriptionInput };
        descriptionInput.isValid = descriptionInput.value.length > 0;
        this.setState({ descriptionInput });
        return descriptionInput.isValid;
      default:
    }
    return true;
  }

  public validateInputs(): boolean {
    const inputForms = [this.state.nameInput, this.state.descriptionInput];
    let areAllValid = true;
    inputForms.forEach(input => {
      if (!this.isValidInput(input.name)) {
        areAllValid = false;
      }
    });
    return areAllValid;
  }

  public render() {
    return (
      <Container style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Card>
          <CardHeader tag="h3">Create a Room</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="roomName">Room Name</Label>
                <Input
                  invalid={!this.state.nameInput.isValid}
                  type="text"
                  name="name"
                  placeholder="Enter a Room Name"
                  onChange={e => {
                    const nameInput = { ...this.state.nameInput };
                    nameInput.value = e.target.value;
                    nameInput.isValid = e.target.value.length > 0;
                    this.setState({ nameInput });
                  }}
                />
                <FormFeedback>{this.state.nameInput.errText}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="roomDescription">Room Description</Label>
                <Input
                  invalid={!this.state.descriptionInput.isValid}
                  type="text"
                  name="description"
                  placeholder="Enter a Room Description"
                  onChange={e => {
                    const descriptionInput = { ...this.state.descriptionInput };
                    descriptionInput.value = e.target.value;
                    descriptionInput.isValid = e.target.value.length > 0;
                    this.setState({ descriptionInput });
                  }}
                />
                <FormFeedback>
                  {this.state.descriptionInput.errText}
                </FormFeedback>
              </FormGroup>
            </Form>
            {/* <Link id="btn btn-secondary" to={`/room${location.hash}`}> */}
            <Button
              onClick={() => {
                if (this.validateInputs()) {
                  console.log('all valid');
                } else {
                  console.log('not all valid');
                }
              }}
            >
              Create Room
            </Button>
            {/* </Link> */}
          </CardBody>
        </Card>
        {this.state.isLoading ? <Loading /> : null}
      </Container>
    );
  }
}

export default CreateRoom;
