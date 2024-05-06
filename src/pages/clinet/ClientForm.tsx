import { Container, Grid, Paper, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Client } from '../../types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, setClientName, setEmail, setMemo, setPhone, setReading } from '../../features/ClientSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { clientApi } from '../../features/ClientApi';
import { worker } from '../../mocks/worker';

export const ClientForm = () => {

  const dispatch = useAppDispatch();
  const {
    clientName,
    reading,
    phone,
    address,
  } = useAppSelector(state=>state.client);
  const { register, handleSubmit, formState: { errors } } = useForm<Client>();
  const [customerName, setCustomerName] = useState<string>("");
  const [clinetReading, setClientReading] = useState<string>("");
  const [clientPhone, setClientPhoneNumber] = useState<string>("")
  const [clientEmail, setClientEmail] = useState<string>("")
  const [clientAddress, setClientAddress] = useState<string>("");
  const [clientMemo, setClientMemo] = useState<string>("");


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value);
    dispatch(setClientName(event.target.value));
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientEmail(event.target.value);
    dispatch(setEmail(event.target.value));
  }
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientAddress(event.target.value);
    dispatch(setAddress(clientAddress));
  }
  const handleMemochange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientMemo(event.target.value);
    dispatch(setMemo(clientMemo));
  }

  const onSubmit = async (data: Client) => {
    try {
      const response = await dispatch(clientApi.endpoints.addClient.initiate({
        clientName: customerName,
        reading: clinetReading,
        phone: Number(clientPhone),
        email: clientEmail,
        address: clientAddress,
        memo: clientMemo,
      }));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('戻る')} // ここに戻るボタンの処理を書く
          style={{ marginBottom: '20px' }} // ボタンの位置を調整
        >
          戻る
        </Button>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="顧客名"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                value={customerName}
                onChange={handleNameChange}
              />
              <TextField
                label="読み方"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                value={clinetReading}
                {...register("reading", {
                  pattern: {
                    value: /^[ァ-ヶー]+$/,
                    message: "カタカナのみを入力してください"
                  },
                  onChange: (e) => {
                    setClientReading(e.target.value);
                    dispatch(setReading(e.target.value));
                  }
                })}
                error={Boolean(errors.reading)}
                helperText={errors.reading?.message}
              />
              <TextField
                label="電話番号"
                variant="outlined"
                fullWidth
                margin="normal"
                value={clientPhone}
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "数字のみを入力してください" ,
                  },
                  maxLength: {
                    value: 12,
                    message: "電話番号は12文字以内で入力してください"
                  },
                  onChange: (e) => {
                    setClientPhoneNumber(e.target.value);
                    dispatch(setPhone(e.target.value));
                  }
                })}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                onChange={handleEmailChange}
                value={clientEmail}
              />
              <TextField
                label="住所"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleAddressChange}
                value={clientAddress}
              />
              <TextField
                label="備考"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                onChange={handleMemochange}
                value={clientMemo}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: '10px' }}
              >
                送信
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}