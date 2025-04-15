using System.ComponentModel;
using System.Runtime.CompilerServices;
using XPDailyApp.Models;

namespace XPDailyApp.ViewModels;

public class MainViewModel : INotifyPropertyChanged
{
    private string _inputText = string.Empty;
    private string _statusMessage = string.Empty;
    private bool _isError;

    public string InputText
    {
        get => _inputText;
        set
        {
            _inputText = value;
            OnPropertyChanged();
        }
    }

    public string StatusMessage
    {
        get => _statusMessage;
        set
        {
            _statusMessage = value;
            OnPropertyChanged();
        }
    }

    public bool IsError
    {
        get => _isError;
        set
        {
            _isError = value;
            OnPropertyChanged();
        }
    }

    public void SaveText()
    {
        if (string.IsNullOrWhiteSpace(InputText))
        {
            StatusMessage = "Por favor, digite algo antes de salvar!";
            IsError = true;
        }
        else
        {
            var textData = new TextData { Content = InputText };
            // Aqui você pode salvar no banco de dados, arquivo, etc.
            StatusMessage = $"Texto salvo: {textData.Content}";
            IsError = false;
            InputText = string.Empty;
        }
    }

    public event PropertyChangedEventHandler? PropertyChanged;

    protected virtual void OnPropertyChanged([CallerMemberName] string? propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
} 