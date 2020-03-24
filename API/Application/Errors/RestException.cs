using System;
using System.Net;
namespace API.Application.Errors
{
    public class RestException : Exception
    {
        public RestException(HttpStatusCode code, object erros = null)
        {
            Code = code;
            Errors = erros;
        }

        public HttpStatusCode Code { get; }

        public object Errors { get; }
    }
}